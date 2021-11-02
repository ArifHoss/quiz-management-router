import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BrowseQuiz from '../views/BrowseQuiz'
import SignUp from '../views/SignUp'
import Login from '../views/Login'
import FirstQuiz from '../components/FirstQuiz'

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
    path: '/FirstQuiz',
    name: 'FirstQuiz',
    component: FirstQuiz,
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
]

const router = new VueRouter({
  routes,
})

export default router
