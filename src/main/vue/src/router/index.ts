import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/HomeView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/home/HomeView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/home/HomeView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/home/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/home/HomeView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/home/HomeView.vue')
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: () => import('@/views/common/PageNotFoundView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/not-found'
    }
  ]
})

export default router
