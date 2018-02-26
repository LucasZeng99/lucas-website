<template>
	<div>
		<div class="header-image">
		<nav class="index">
			<router-link to="/todo" exact><p>todo</p></router-link>
			<router-link to="/hello" exact><p>hello</p></router-link>
			<router-link to="/blogs" exact><p>blog</p></router-link>
			<router-link to="/add-blog" exact><p>add blog</p></router-link>
			<button @click="logout" class="logbtn">logout</button>
			<button @click="login" class="logbtn">login</button>
		</nav>
		<router-link to="/hello" class="img-stealth"><img src="/static/img/myself-stealth.png" alt="me" class="img-stealth"></router-link>
		</div>
		</div>
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
.index {
	display: flex;
	max-width: 100%;
	height: 60px;
	margin: 0 auto;
	text-align: left;

}
a{
	flex-grow: 2;
	flex-shrink: 1;
	flex-wrap: wrap;
	height: 100%;
	padding: 0;
	background-color: rgba(68, 68, 68, 0.5);
	text-decoration: none;
	color: #fff;
	text-align: center;
	vertical-align: middle;
	transition: 0.3s;
}
a >p{
	position: relative;
	top:50%;
	transform: translateY(-50%);
}
.router-link-active {
	background-color: rgba(51, 51, 51, 0.5);
	border-bottom: 2px solid #A2F7E2;
}
.logbtn {
	flex-grow: 1;
	flex-shrink: 2;
	flex-wrap: wrap;
	height: 100%;
	padding: 0;
/* 	border-right: 1px solid #AEF9C9; */
	background-color: rgba(177, 177, 177,0.5);
	border: none;
	cursor: pointer;
	font-size: 17px;
	text-decoration: none;
	color: rgb(51, 51, 51);
	text-align: center;
	vertical-align: middle;
	transition: 0.3s;
}

.logbtn:hover {
	background-color: rgba(51, 51, 51,0.3);
	color: #fff;
}

a:hover {
	background-color: rgba(177, 177, 177,0.5);
}

.header-image{
	width: 100%;
	height: 400px;
	background-image: url('/static/img/header-green-min.jpeg');
	background-size: 1300px;
	background-position: center;
	margin-bottom: 20px;
}

.img-stealth {
	width: 200px;
	height: auto;
	position: absolute;
	left: 50%;
	margin-top: 40px;
	transform: translateX(-50%);
	border: none;
	transition: 0.6s;
}

img.img-stealth:hover {
	filter: hue-rotate(360deg) saturate(3.3) contrast(200%);
}
</style>