<template>
	<div class="sign-up-container">
	<div class="sign-up">
		<h3>Create an Account</h3>
		<input type="text" v-model="email" placeholder="Email">
		<input type="password" v-model="password" placeholder="Password" @keyup.enter="signUp"><br>
		<button @click="signUp">Sign Up</button>
		<span>or return to <router-link to="/login">login</router-link>.</span>
	</div>
</div>
</template>

<script>
import firebase from 'firebase'
import router from '../router/index.js'
export default {
	name: 'signUp',
	data() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		signUp() {
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
					function (user) {
						alert('account created.')
						router.replace('index')
					},
					function (err) {
						alert('Oops. '+ err.message)
					}
				)
		}
	}
}

</script>

<style scoped>
.sign-up-container {
	margin: 0;
	padding-top: 30px;
	height: 370px;
	background-color: #E1EEE6; 
}
.sign-up {
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
	width: 6%;
	height: 40px;
	margin-top: 20px;
	background-color: #ddd;
	border: none;
}
</style>