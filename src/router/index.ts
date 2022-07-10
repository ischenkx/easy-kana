import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue'
import PracticeCenter from '../components/PracticeCenter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/practice-center/:subject',
      component: PracticeCenter
    },
    {
      path: '/practice-center',
      component: PracticeCenter
    },
    {
      path: '/',
      component: Home
    },
  ],
});

export default router;
