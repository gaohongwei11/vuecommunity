import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import content from '@/components/content'
import user from '@/components/user'
import login from '@/components/login'
import publish from '@/components/publish'
import personal from '@/components/personal'
import message from '@/components/message'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        console.log(savedPosition)
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
  routes: [
    {
      path: '/vuecommunitytest/test',
      name: 'test',
      component: test
    },
    {
      path: '/vuecommunitytest',
      name: 'home',
      component: home
    },
    {
      path: '/vuecommunitytest/content',
      name: 'content',
      component: content
    },
    {
      path: '/vuecommunitytest/user',
      name: 'user',
      component: user
    },
    {
      path: '/vuecommunitytest/login',
      name: 'login',
      component: login
    },
    {
      path: '/vuecommunitytest/publish',
      name: 'publish',
      component: publish
    },
    {
      path: '/vuecommunitytest/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/vuecommunitytest/message',
      name: 'message',
      component: message
    }
  ]
})
