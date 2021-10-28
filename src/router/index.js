import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BrowseQuiz from "@/views/BrowseQuiz";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  },
  {
    path: '/BrowseQuiz',
    name: 'BrowseQuiz',
    component:BrowseQuiz
  },
  {
    path: '/FirstQuiz',
    name: 'FirstQuiz',
    component: () => import('../components/FirstQuiz.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
