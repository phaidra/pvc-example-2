import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import PSearch from 'phaidra-vue-components/src/components/search/PSearch'
import Detail from '@/components/Detail'
import configjs from '../config/pvc-example-2'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/search',
        name: 'search',
        component: PSearch,
        props: { ownerProp: configjs.global.owner }
      },
      {
        path: '/detail/:pid',
        name: 'detail',
        component: Detail
      }
    ]
  })
}
