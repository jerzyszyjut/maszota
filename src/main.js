import Vue from 'vue';

import App from './App.vue';
import router from './router/index';
import VueRouter from 'vue-router';

import './assets/style/global.css';
import i18n from './i18n'

Vue.use(VueRouter);
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');

