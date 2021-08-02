import Vue from 'vue';

import App from './App.vue';
import router from './router/index';
import VueRouter from 'vue-router';

import './assets/style/global.css';
import './assets/global.css';

Vue.use(VueRouter);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

