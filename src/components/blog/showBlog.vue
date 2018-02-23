<template>
	<div class="blog-view">
		<h1>blog</h1>
		<div class="all-blogs">
			<ul>
        <li v-for="(blogItem, key) in blogs" :key="key">
          <router-link :to="'/blog/'+blogItem.id"><h2 class="article-title">{{blogItem.title}}</h2>
			    <p class="article-content">{{filteredBlogContent(blogItem)}}</p></router-link>
        </li>
		</ul>
		</div>	
	</div>
</template>

<script>
import firebase from "firebase";
import { log } from 'util';

export default {
  name: "showBlog",
  data() {
    return {
      blogs: []
    };
  },
  methods: {
    filteredBlogContent: function (blogItem) {
      return blogItem.content.slice(0, 100) + '......'
    }
  },
  created() {
    this.$http.get("https://mynote-example.firebaseio.com/blogs.json").then(function(data) {
      return data.json()
      }).then(function(data){
        var blogsArray = []
        for(let key in data){
          data[key].id = key
          blogsArray.push(data[key])
        }
        this.blogs = blogsArray
      })
      
  }
};
</script>

<style scoped>
.blog-view {
  max-width: 900px;
  min-height: 390px;
  display: block;
  padding-top: 20px;
  margin: 0 auto;
  box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #798a82;
    margin: 10px;
}
a {
  text-decoration: none;
  color: black;
}
</style>