import Vue from 'vue';
import VueRouter from 'vue-router';

//Pages
import NotreGroupe from '@/components/Notre-groupe.vue';
import NotFound from '@/components/error/404.vue';


Vue.use(VueRouter);

//Listes des routes
const routes = [
  {
    path: '/',
    name : 'home'
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
  mode: 'history'
});

export default router;