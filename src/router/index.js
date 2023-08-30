import { createRouter, createWebHistory } from 'vue-router';
import  HelloWorld from '../components/HelloWorld.vue'; // Import your homepage component
import CookiePolicy from '../components/CookiePolicy.vue'; // Import your Cookie Policy component
import PrivacyPolicy from '../components/PrivacyPolicy.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
  },
  {
    path: '/policy',
    name: 'CookiePolicy',
    component: CookiePolicy,
  },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
