<template>
	<footer>
		<div><p>Created by Lucas Zeng</p>
			<p>with Vue.js and Webpack</p>
			<img src="../assets/logo.png">
		</div>
	</footer>
</template>

<script>
	
export default {
	name: 'Footer',
}

</script>

<style scoped>
*{
	margin:0;
}
footer{
	margin: 0 auto;
	box-sizing: border-box;
	height: 120px;
	background-color: #333;
}
footer > div {
	position: relative;
	top: 20%;
	text-align: center;
	color: #eee;
}
footer > div >p {
	margin-bottom: 4px;
}
img{
	display:inline-block;
	width: 20px;
}
</style>