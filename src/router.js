import VueRouter from 'vue-router';

import HelloWorldView from './views/HelloWorldView.vue';

const routes = [
    { path: '/', name: "HelloWorld", component: HelloWorldView },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;