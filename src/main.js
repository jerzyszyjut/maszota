import Vue from 'vue';

import App from './App.vue';
import router from './router/index';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

import './assets/style/global.css';
import i18n from './i18n'
import vuetify from './plugins/vuetify'

router.beforeEach((to, from, next) => {

  let language = to.params.lang;
  if (!language) {
    language = 'en'
  }

  i18n.locale = language
  next()
})

Vue.use(Meta);
Vue.use(VueRouter);
new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app');

