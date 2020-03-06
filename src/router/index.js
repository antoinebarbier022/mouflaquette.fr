import Vue from 'vue';
import VueRouter from 'vue-router';

//Pages
import Test from '@/components/test.vue';


Vue.use(VueRouter);

//Listes des routes
const routes = [
  {
    path: '/',
    name : 'home'
  },
  {
    path: '/test',
    name : 'test',
    component: Test
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;