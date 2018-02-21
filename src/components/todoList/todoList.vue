<template>
	<div class="todo-list">
		<input id="input" type="text" v-model="newTodo" placeholder="Add a Todo" @keyup.enter="addTodo"/>
		<h2>added todos:</h2>
		<ul>
			<li v-for="(todo, index) in todos">
				<div class="todo-item">
					<input type="checkbox" @click="clickTodo(index)" :checked="todos[index].completed">
					<input v-model="todos[index].content" @keydown="editTodo(index)" @keyup.enter="completeTodo(index)" :class="{ 'completed': todos[index].completed }" >
					<button @click="removeTodo">X</button>
				</div>
				
			</li>
		</ul>
	</div>
</template>

<script>
var inputNum = 1
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
			this.todos.push({
				key: inputNum++,
				content: this.newTodo,
				completed: false,
			})
			this.newTodo = ''
		},
		removeTodo(id) {
			this.todos.splice(id, 1)
		},
		completeTodo(index) {
			this.todos[index].completed = true
		},
		editTodo(index) {

			this.todos[index].completed = false
			/*console.log(this.todos[index].completed)*/
		},
		clickTodo(index) {
			this.todos[index].completed = !this.todos[index].completed
		}
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
	width: 400px;
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