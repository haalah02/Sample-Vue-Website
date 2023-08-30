import { createRouter, createWebHistory } from 'vue-router';
import  HelloWorld from '../components/HelloWorld.vue'; // Import your homepage component
import CookiePolicy from '../components/CookiePolicy.vue'; // Import your Cookie Policy component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
  },
  {
    path: '/cookie-policy',
    name: 'Cookie Policy',
    component: CookiePolicy,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
