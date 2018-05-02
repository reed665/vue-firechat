import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Chat from '@/views/Chat.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        const { name } = to.params
        if (name) {
          next()
        } else {
          next({ name: 'home' })
        }
      }
    },
  ]
})
