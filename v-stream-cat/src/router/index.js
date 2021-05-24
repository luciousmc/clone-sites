import { createRouter, createWebHistory } from 'vue-router'
import Browse from '../views/Browse'

const routes = [
  {
    path: '/',
    name: 'Browse',
    component: Browse
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
