import Vue from 'vue'
import VueRouter from 'vue-router'


//views
import Home from '@/views/Home.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
})

export default router;