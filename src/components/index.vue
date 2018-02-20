<template>
	<div class="container" >
		<todo-list></todo-list>
	</div>
</template>

<script>
import todoList from './todoList/todoList'

export default {
	name: 'index',
	components: {
		'todo-list': todoList,
	}
}

</script>

<style scoped>
div.container{
	min-height: 410px;
	margin: 0;
	display: block;
	background-color: #E1EEE6;
}

</style>