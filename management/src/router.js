import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      redirect: 'Home',
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import(/* webpackChunkName: "Home" */ './components/Home/Home'),
      children: [
        {
          path: 'Calendar',
          name: 'Calendar',
          component: ()=>import(/* webpackChunkName："Calendar" */ './components/Home/Calendar/Calendar')
        },
        {
          path: 'Frequency',
          name: 'Frequency',
          component: ()=>import(/* webpackChunkName："Frequency" */ './components/Home/Frequency/Frequency')
        },
        {
          path: 'Messagers',
          name: 'Messagers',
          component: ()=>import(/* webpackChunkName："Messagers" */ './components/Home/Messagers/Messagers')
        },
        {
          path: 'System',
          name: 'System',
          component: ()=>import(/* webpackChunkName："System" */ './components/Home/System/System')
        },
        {
          path: 'Types',
          name: 'Types',
          component: ()=>import(/* webpackChunkName："Types" */ './components/Home/Types/Types')
        },
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    }
  ]
})
