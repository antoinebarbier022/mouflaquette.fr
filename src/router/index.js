import Vue from 'vue';
import VueRouter from 'vue-router';

//Pages
import NotreGroupe from '@/components/Notre-groupe.vue';


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
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;