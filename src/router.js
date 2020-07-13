import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('./views/Home.vue')
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('./views/Login.vue')
    },
    {
      path:'/topic/:id',
      name:'topic',
      component:()=>import('./views/Topic.vue')
    },
    {
      path:'/user/:loginname',
      name:'user',
      component:()=>import('./views/User.vue')
    },
    {
      path:'*',
      name:'NotMatch',
      component:()=>import('./views/404.vue')
    }
  ]
})
