import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue';
import Admin from './views/Admin.vue';
import Login from './views/Login.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          name: 'app',
          component: App
      },
      {
          path: '/admin',
          name: 'admin',
          component: Admin
      },
      {
          path: '/login',
          name: 'login',
          component: Login
      }
  ]
})
