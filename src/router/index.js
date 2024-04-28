import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/Map.vue')
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: () => import('../views/Vehicle/Vehicles.vue')
    },
    {
      path: '/vehicle/:id',
      name: 'vehicle',
      component: () => import('../views/Vehicle/Vehicle.vue')
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: () => import('../views/Driver/Drivers.vue')
    },
    {
      path: '/drivers:/:id',
      name: 'driver',
      component: () => import('../views/Driver/Driver.vue')
    },
  ]
})

export default router
