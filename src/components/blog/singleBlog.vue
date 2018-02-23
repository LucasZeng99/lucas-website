<template>
	<div class="single-blog">
        <article>
            <h2>{{blog.title}}</h2>
            <p>{{blog.content}}</p>
        </article>
    </div>
</template>

<script>
	
export default {
    name: 'singleBlog',
    data() {
        return {
            id: this.$route.params.id,
            blog: {},
        }
    },

    created() {
        this.$http.get("https://mynote-example.firebaseio.com/blogs/" + this.id + '.json').then(function(data) {
        return data.json()
      }).then(function(data){
          this.blog = data
      })
    }
}

</script>

<style scoped>
.single-blog {
    max-width: 750px;
    margin: 0 auto;
    border: 2px solid rgb(180, 180, 180);
    padding: 30px;
    margin-bottom: 30px;
    min-height: 350px;
}

article > p {
    margin: 10px;
    padding: 10px;
}

article > h2 {
    margin-bottom: 10px;
    border-bottom: 1px solid cadetblue;
}
</style>