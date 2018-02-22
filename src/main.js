// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import firebase from 'firebase'
Vue.config.productionTip = false
Vue.use(VueResource)
var config = {
    apiKey: "AIzaSyCBvSzW2o8vcHsfrNw-WQGhOBsvQ7N1984",
    authDomain: "mynote-example.firebaseapp.com",
    databaseURL: "https://mynote-example.firebaseio.com",
    projectId: "mynote-example",
    storageBucket: "mynote-example.appspot.com",
    messagingSenderId: "555955094319"
  };
firebase.initializeApp(config);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
