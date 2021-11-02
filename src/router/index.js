import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectAdd from '../views/projects/ProjectAdd.vue'
import ProjectDetails from '../views/projects/ProjectDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'ProjectAdd',
    component: ProjectAdd
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetails',
    component: ProjectDetails,
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
