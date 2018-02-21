<template>
	<div class="todo-list">
		<input id="input" type="text" v-model="newTodo" placeholder="Add a Todo" @keyup.enter="addTodo"/>
		<h2>added todos:</h2>
		<ul>
			<li v-for="(todo, index) in todos">
				<div class="todo-item">
					<input type="checkbox" @click="clickTodo(index)" :checked="todos[index].completed">
					<input v-model="todos[index].content" @keydown="editTodo(index)" @keyup.enter="completeTodo(index)" :class="{ 'completed': todos[index].completed }" >
					<button @click="removeTodo(index)">X</button>
				</div>
				
			</li>
		</ul>
	</div>
</template>

<script>
var inputNum = 0
export default {
	name: 'todoList',
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
/*			var name = this.todos[id].name
			var completed = this.todos[id].completed
			var content = this.todos[id].content
			var item = {
				'body':{
				name: {
					'completed': completed,
					'coontent': content,
				}
			}
			}
			(item)*/
		/*	var item = {
			}
			item['name'] = this.todos[id].name
			(item)
			this.$http.delete('https://mynote-example.firebaseio.com/todolist.json', item).then(function(data) {
				(data)
			})*/
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
	min-height: 100%;
	padding: 20px;
}

li > * {
	position: relative;
	top: 20%;
}
</style>