import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Games from '@/components/Games';
import Session from '@/components/Session';
import Lobby from '@/components/Lobby';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/games',
      name: 'Games',
      component: Games,
    },
    {
      path: '/session/:id',
      name: 'Session',
      component: Session,
    },
    {
      path: '/lobby',
      name: 'Lobby',
      component: Lobby,
    },
  ],
});
