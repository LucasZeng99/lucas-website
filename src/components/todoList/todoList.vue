<template>
	<div class="todoList">
	<input id="input" type="text" v-model="newTodo" placeholder="Add a Todo" @keyup.enter="addTodo">

	<h2>added todos:</h2>
	<ul>
		<li v-for="todo in todos">
			<div class="todo-view">
				<!-- <input type="text" :value="todo.content" :placeholder="todo.content" @keyup.enter="editTodo(todo.id)"> -->
				<p>{{todo.content}}</p>
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
				todos: [
			]}
	},
	methods: {
		addTodo: function() {
			this.todos.push({
				id: inputNum++,
				content: this.newTodo,
			})
			this.newTodo = ''
		},
		removeTodo(id) {
			this.todos.splice(id, 1)
		}
	},
/*	created: function() {
		window.addEventListener('change', this.addTodo)
	},*/
}

</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
li{
	text-decoration: none;
}
</style>