<template>
	<div class="container">
		<todo-list></todo-list>
	</div>
</template>

<script>
import todoList from './todoList/todoList'
export default {
	name: 'index',
	components: {
		'todo-list': todoList,
	},
	methods: {
	},
	

    
}

</script>

<style scoped>
div.container{
	min-height: 410px;
	margin: 0;
	display: block;
	background-color: #E1EEE6;
}

div.back {
	display: inline-block;
	width:500px;
	height:500px;
	background-color: yellow;
}
</style>