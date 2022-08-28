import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage'
import About from '../pages/AboutPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router