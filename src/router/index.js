import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BrowseQuiz from '../views/BrowseQuiz'
import SignUp from '../views/SignUp'
import Login from '../views/Login'
import RandomQuiz from "@/components/RandomQuiz";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home,
  },
  {
    path: '/BrowseQuiz',
    name: 'BrowseQuiz',
    component: BrowseQuiz,
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/RandomQuiz',
    name: 'RandomQuiz',
    component: RandomQuiz,
    props: true
  }
]

const router = new VueRouter({
  routes,
})

export default router
