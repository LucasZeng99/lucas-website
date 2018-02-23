<template>
	<div class="blog-view">
		<h1>blog</h1>
		<article v-for="(blog, key) in blogs" :key="key">
			<h2 class="article-title">{{blog.title}}</h2>
			<p class="article-content">{{blog.content}}</p>
		</article>
	</div>
</template>

<script>
import firebase from 'firebase'

export default {
	name: 'showBlog',
	data() {
		return {
			blogs: [],
		}
	},

	created() {
		this.$http.get("https://mynote-example.firebaseio.com/blogs.json").then(function(data){
			if (!data.body) {
				this.blogs = []
			}
			else {
				var names = []
				for (name in data.body){
					names.push(name)
				}
				var items = Object.values(data.body)
				for (let item in items) {
					items[item].name = names[item]
					this.blogs.push(items[item])
				}
			}
		})
	}
}

</script>

<style scoped>
.blog-view {
	max-width: 500px;
	min-height: 390px;
	display: block;
	padding-top: 20px;
	margin: 0 auto;
}
article {
	padding: 8px;
	background-color: #eee;
	margin: 0 auto;
	margin-top: 20px;
}

</style>