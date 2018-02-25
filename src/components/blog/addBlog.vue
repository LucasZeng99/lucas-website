<template>
	<div class="add-blog">
		<div class="blog-container">
			<h2>Add a Blog</h2>
			<form spellcheck="true">
				<p>title: </p><input type="text" v-model="title"><button @click="postBlog">submit</button>
				<p>content: </p><textarea spellcheck="true" rows="10" cols="50" v-model="content" wrap="hard"></textarea>
			</form>
			
		</div>
	</div>
</template>

<script>
import firebase from 'firebase'
export default {
	name: 'addBlog',
	data(){
		return {
			title: '',
			content: "",
		}
	},
	methods: {
		postBlog() {
			var user = firebase.auth().currentUser
			if (user.email == 'lucaszeng99@gmail.com' && user.uid == 'febGzFZaCaMsvHFGeYFCh7T0Mxj1') {
				var newPostKey = firebase.database().ref().child('blogs').push().key;
				var postData = {
					title: this.title,
					content: this.content
				  // Write the new post's data simultaneously in the posts list and the user's post list.
				}
				var updates = {};
				updates['/blog/' + newPostKey] = postData;
				firebase.database().ref().update(updates)
			}
			this.$router.replace('/blogs')
		}
	},
	created() {
		var user = firebase.auth().currentUser
		if(user.email != 'lucaszeng99@gmail.com') {
			this.$router.replace('/blogs')
			alert('Sorry, you are not me.')
		}
	}
}

</script>

<style scoped>
.add-blog{
	text-align: left;
	padding: 20px;
}

input {
	margin: 10px auto;
	padding: 10px;
}
textarea {
	padding: 10px;
	margin-top: 20px;
	min-height: 150px;
	min-width: 300px;
	font-family: Georgia, 'Times New Roman', Times, serif;
}
.blog-container {
	max-width: 800px;
	margin: 0 auto;
}
.blog-container p {
	margin: 0;
}
button {
	display: inline-block;
	padding: 10px;
	width: 80px;
	height: 40px;
	margin-left: 20px;
}
</style>