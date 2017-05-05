import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/components/home'
import test from '@/components/test'
import content from '@/components/content'
import user from '@/components/user'
import login from '@/components/login'
import publish from '@/components/publish'
import personal from '@/components/personal'
import message from '@/components/message'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/content',
      name: 'content',
      component: content
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})
