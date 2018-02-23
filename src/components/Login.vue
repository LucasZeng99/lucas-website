<template>
	<div class="login-container">
	<div class="login">
		<h3>Sign In</h3>
		<form>
		<input type="text" placeholder="Email" v-model="email">
		<input type="password" placeholder="Password" v-model="password" @keyup.enter="login" autocomplete="on">
		</form><br>
		<button @click="login" @keyup.enter="login">Connect</button>
		<p>no account? <router-link to="/signup">create one</router-link>.</p>
	</div>
</div>
</template>

<script>
import firebase from 'firebase'
import router from '../router/index.js'
export default {
	name: 'login',
	data() {
		return {
			email: '',
			password: '',
		}
	},
	methods: {
		login() {
			firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
				function(user) {
					router.replace('index')
				},
				function(err) {
					alert('Oops, '+ err.message)
				}
				)
		}
	},
	created() {
		let currentUser = firebase.auth().currentUser
		if (currentUser) {
			firebase.auth().signOut().then(function(){
				alert('you signed out to login again.')
			})
		}
	}
}

</script>

<style scoped>
.login-container {
	margin: 0;
	padding-top: 30px;
	height: 370px;
	background-color: #E1EEE6; 
}
.login {
	margin: 0;
	position: relative;
	top: 20%;
	text-align: center;
	display: block;
}
h3{
	margin: 0;
	margin-bottom: 30px;
}
input {
	display: block;
	margin: 6px auto;
	padding: 10px;
	width: 20%
}
button {
	cursor: pointer;
	font-size: 14px;
	width: 80px;
	height: 40px;
	margin-top: 20px;
	background-color: #ddd;
	border: none;
}
</style>