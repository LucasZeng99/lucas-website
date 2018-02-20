import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import shootingGame from '@/components/shootingGame'

Vue.use(Router)

const routes = [
	{
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    /*{
  	  path: '/shooting-game',
      name: 'shootingGame',
      component: shootingGame
    }*/
    ]
export default new Router({
  routes: routes,
})
