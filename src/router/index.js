import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Repolist from '@/components/Repolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Repolist',
      component: Repolist
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up/:repo',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/repolist',
      name: 'Repolist',
      component: Repolist
    }
  ]
})
