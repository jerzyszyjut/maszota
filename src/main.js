import Vue from 'vue';

import App from './App.vue';
import router from './router/index';
import VueRouter from 'vue-router';

import './assets/style/global.css';
import i18n from './i18n'

router.beforeEach((to, from, next) => {

  let language = to.params.lang;
  if (!language) {
    language = 'en'
  }

  i18n.locale = language
  next()
})

Vue.use(VueRouter);
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');

