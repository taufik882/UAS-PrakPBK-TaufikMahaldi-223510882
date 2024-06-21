import { createRouter, createWebHistory } from 'vue-router';
import Weather from '../views/Weather.vue';

const routes = [
  { path: '/', redirect: '/weather' },
  { path: '/weather', component: Weather },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
