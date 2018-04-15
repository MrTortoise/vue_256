import Vue from 'vue'
import Router from 'vue-router'
import Hello256 from '@/components/Hello256'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello256',
      component: Hello256
    }
  ]
})
