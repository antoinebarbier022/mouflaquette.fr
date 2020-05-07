import Vue from 'vue';
import VueRouter from 'vue-router';

//Pages
import NotreGroupe from '@/components/Notre-groupe.vue';
import NotFound from '@/components/error/404.vue';
import Home from '@/components/Home.vue';


Vue.use(VueRouter);

//Listes des routes
const routes = [
  {
    path: '/',
    name : 'home',
    component: Home
  },
  {
    path: '/notre-groupe',
    name : 'notre-groupe',
    component: NotreGroupe
  },
  { path: '*', component: NotFound }
];

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  mode: 'history'
});

export default router;