import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Graphs from '../views/Graphs.vue'
import Prediction from '../views/Prediction.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'


import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

Vue.use(VueRouter)

const routes = [
  {
    path: '/prediction',
    name: 'Prediction',
    component: Prediction
  },
  {
    path: '/graphs',
    name: 'Graphs',
    component: Graphs
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Register',
    component: Register
  },
  {
    path: '/register',
    name: 'Login',
    component: Login
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
