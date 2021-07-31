import Vue from 'vue';

import App from './App.vue';
import router from './router/index';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

