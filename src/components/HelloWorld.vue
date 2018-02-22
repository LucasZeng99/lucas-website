<template>
  <div class="container">
  <div class="hello">
    <h1>hello</h1>
    <h2>welcome to my vue.js app</h2>
    <h2>feel free to view my website,</h2>
    <h2>to view the index you have to log in/sign up.</h2>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container{
  min-height: 410px;
  margin: 0;
  display: block;
  background-color: #E1EEE6;
}
.hello {
  text-align: center;
  margin:0;
  padding:10px;
}
h1, h2 {
  font-weight: normal;
  margin-top: 0;
}
</style>
