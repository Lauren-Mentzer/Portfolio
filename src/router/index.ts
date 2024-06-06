import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'About',
      component: HomeView
    },
    {
      path: '/experience',
      name: 'Experience',
      component: ExperienceView
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView
    }
  ]
})

export default router
