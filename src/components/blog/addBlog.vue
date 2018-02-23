<template>
	<div class="add-blog">
		<div class="preview">
			<h3>Preview: {{title}}</h3>
			<textarea rows="10" cols="30" readonly class="preview-content" @keyup.enter="postBlog">{{content}}</textarea>
		</div>
		<div class="blog-container">
			<h2>Add a Blog</h2>
			<form>
				<p>title: </p><input type="text" v-model="title"><br>
				<p>content: </p><textarea rows="10" cols="30" v-model="content"></textarea>
			</form>
			<button @click="postBlog">submit</button>
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
				updates['/blogs/' + newPostKey] = postData;
				firebase.database().ref().update(updates)
			}
			this.$router.replace('/blog')
		}
	}
}

</script>

<style scoped>
.add-blog{
	display: block;
	margin: 0 25% 0 auto;
	max-width: 1200px;
	text-align: center;
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
}
.preview {
	display: inline-block;
	text-align: left;
	white-space: pre-wrap;
}
.preview-content {
	outline: none;
	border: 2px solid #ccc;
	border-radius: 4px;
	cursor: default;
}
.preview > h3{
	margin: 0 auto;
}

.blog-container {
	display: inline-block;
}
</style>