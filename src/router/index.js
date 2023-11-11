// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('@/layouts/Login.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Login.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Dashboard.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
