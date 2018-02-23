<template>
	<div class="todo-list" id="todo-list">
		<div id="todo-list-header">drag here</div>
		<input id="input" type="text" v-model="newTodo" placeholder="Add a Todo" @keyup.enter="addTodo"/>
		<h2>added todos:</h2>
		<draggable v-model="todos" @start="drag=true" @end="drag=false" >
			<div v-for="(todo, key) in todos" :key="key">
				<div class="todo-item">
					<input type="checkbox" @click="clickTodo(index)" :checked="todos[index].completed">
					<input v-model="todos[index].content" @keydown="editTodo(index)" @keyup.enter="completeTodo(index)" :class="{ 'completed': todos[index].completed }" >
					<button @click="removeTodo(index)">X</button>
				</div>
				
			</div>
		</draggable>
	</div>
</template>

<script>
import draggable from 'vuedraggable'

var inputNum = 0
export default {
	name: 'todoList',
	components: {
		draggable,
	},
	data () {
			return {
				newTodo: '',
				todos: [],
			}
	},
	methods: {
		addTodo: function() {
			var newTodo = this.newTodo
			var item = {
				content: newTodo,
				completed: false,
				name: ''
			}
			this.todos.push(item)
			this.$http.post('https://mynote-example.firebaseio.com/todolist.json',{
				content: this.newTodo,
				completed: false,
			}).then(function(data) {
				var name = data.body.name
				this.todos[this.todos.indexOf(item)].name = name
			})
			inputNum++
			this.newTodo = ''
		},
		removeTodo(id) {
			this.todos.splice(id, 1)
			this.$http.delete('https://mynote-example.firebaseio.com/todolist.json')
			for (let id in this.todos) {
				this.$http.post('https://mynote-example.firebaseio.com/todolist.json', this.todos[id])
			}
		},
		completeTodo(index) {
			this.todos[index].completed = true
		},
		editTodo(index) {
			this.todos[index].completed = false
		},
		clickTodo(index) {
			this.todos[index].completed = !this.todos[index].completed
		},
	
	},
	created() {
		this.$http.get("https://mynote-example.firebaseio.com/todolist.json").then(function(data){
			if (!data.body) {
				this.todos = []
			}
			else {
				var names = []
				for (name in data.body){
					names.push(name)
				}
				var items = Object.values(data.body)
				for (let item in items) {
					items[item].name = names[item]
					this.todos.push(items[item])
				}
			}
		})
	},
	mounted() {
		dragElement(document.getElementById(("todo-list")));

		function dragElement(elmnt) {
		  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		  if (document.getElementById(elmnt.id + "-header")) {
		    /* if present, the header is where you move the DIV from:*/
		    document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
		  } else {
		    /* otherwise, move the DIV from anywhere inside the DIV:*/
		    elmnt.onmousedown = dragMouseDown;
		  }

		  function dragMouseDown(e) {
		    e = e || window.event;
		    // get the mouse cursor position at startup:
		    pos3 = e.clientX;
		    pos4 = e.clientY;
		    document.onmouseup = closeDragElement;
		    // call a function whenever the cursor moves:
		    document.onmousemove = elementDrag;
		  }

		  function elementDrag(e) {
		    e = e || window.event;
		    // calculate the new cursor position:
		    pos1 = pos3 - e.clientX;
		    pos2 = pos4 - e.clientY;
		    pos3 = e.clientX;
		    pos4 = e.clientY;
		    // set the element's new position:
		    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		  }

		  function closeDragElement() {
		    /* stop moving when mouse button is released:*/
		    document.onmouseup = null;
		    document.onmousemove = null;
		  }
		}
	}
}

</script>

<style scoped>
*{
	margin: 0;
}
li{
	text-decoration: none;
	list-style: none;
	position: relative;
	left: 10%;
	margin: 10px!important;
	height: 50px;
	width: 230px;
	background-color: #83769F;
}

button {
	display: inline-block;
}
.completed {
	text-decoration: line-through;
}

.todo-list {
	margin: 0;
	display: block;
	max-width: 400px;
	background-color: #456A6A;
	text-align: center;
	min-height: 300px;
	min-width: 400px;
	max-height: 400px;
	padding: 20px;
	padding-top: 0;
}

li > * {
	position: relative;
	top: 20%;
}
.todo-item {	
	position: relative;
	left: 10%;
	max-width: 300px;
	background-color: #ddd;
	margin-top: 2px;
	padding: 4px 0;
}
#todo-list {
    position: absolute;
    z-index: 9;
    background-color: #f1f1f1;
    border: 1px solid #d3d3d3;
    text-align: center;
    padding-top: 6px;
}

#todo-list-header {
    padding: 10px;
    cursor: move;
    z-index: 10;
    background-color: #2196F3;
    color: #fff;
    margin-bottom: 8px;
}
</style>