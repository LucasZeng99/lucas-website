<template>
	<nav>
		<nav class="index">
			<router-link to="/todo" exact><p>todo</p></router-link>
			<router-link to="/hello" exact><p>hello</p></router-link>
			<router-link to="/blogs" exact><p>blog</p></router-link>
			<router-link to="/add-blog" exact><p>add blog</p></router-link>
			<button @click="logout" class="logbtn">logout</button>
			<button @click="login" class="logbtn">login</button>
		</nav>
	</nav>
</template>

<script>
import firebase from 'firebase'
export default {
	name: "appHeader",
	methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
      	alert('you signed out.')
        this.$router.replace('login')
      })
    },
    login() {
    	this.$router.replace('login')
    }
  }
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
	margin-bottom: 60px;
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
.logbtn {
	display: inline-block;
	height: 100%;
	width: 80px;
	padding: 0;
/* 	border-right: 1px solid #AEF9C9; */
	background-color: #b1b1b1;
	border: none;
	cursor: pointer;
	font-size: 17px;
	text-decoration: none;
	color: #fff;
	text-align: center;
	vertical-align: middle;
}
</style>