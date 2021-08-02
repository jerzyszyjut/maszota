import Vue from 'vue';

import App from './App.vue';
import router from './router/index';
import VueRouter from 'vue-router';

<<<<<<< HEAD
import './assets/style/global.css';
=======
import './assets/global.css';
>>>>>>> master

Vue.use(VueRouter);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

