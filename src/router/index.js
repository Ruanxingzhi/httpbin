import Vue from 'vue'
import Router from 'vue-router'
import intro from '@/components/Intro'

import querybox from '@/components/QueryBox.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index-page',
      component: intro
    },
    {
      path: '/bin/:msg',
      component: querybox
    }
  ]
})
