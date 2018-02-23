import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import showBlog from '@/components/blog/showBlog'
import addBlog from '@/components/blog/addBlog'
import singleBlog from '@/components/blog/singleBlog'
import firebase from 'firebase'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/hello'
    },
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
     /* meta: {
        requiresAuth: true
      }*/
    },
    {
      path: '/blogs',
      name: 'showBlog',
      component: showBlog
    },
    {
      path: '/add-blog',
      name: 'addBlog',
      component: addBlog,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/todo',
      name: 'todo-index',
      component: Index,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/blog/:id',
      name: 'singleBlog',
      component: singleBlog,
    }
    ]
})
router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('login')
  }
  else next()
})
export default router
