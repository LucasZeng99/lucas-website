<template>
	<nav>
		<nav class="index">
			<router-link to="/" exact><p>home</p></router-link>
			<router-link to="/hello" exact><p>hello</p></router-link>
		</nav>
	</nav>
</template>

<script>

export default {
	name: "appHeader",
	/*data() {
		return {
		}
	}*/
}

</script>

<style scoped>
* {
	padding: 0;
	box-sizing: border-box;
	margin: 0;
	display: block;
}
nav{
	max-width: 100%;
	height: 60px;
	margin: 0 auto;
	background-color: #4E874E;
}
nav.index {
	height: 100%;
	text-align: left;
}
a{
	display: inline-block;
	height: 100%;
	width: 80px;
	padding: 0;
/* 	border-right: 1px solid #AEF9C9; */
	background-color: #444;
	text-decoration: none;
	color: #fff;
	text-align: center;
	vertical-align: middle;
}
a >p{
	position: relative;
	top:50%;
	transform: translateY(-50%);
}
.router-link-active {
	background-color: #333;
	border-bottom: 2px solid #A2F7E2;
}
</style>