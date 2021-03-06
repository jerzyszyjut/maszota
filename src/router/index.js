import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import AboutUs from '../views/AboutUs.vue'
import Contact from '../views/Contact.vue'

import i18n from '../i18n'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render (c) {return c('router-view')}
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'services',
        name: 'Services',
        component: Services
      },
      {
        path: 'about-us',
        name: 'AboutUs',
        component: AboutUs
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact
      }
    ]
  },
  { 
    path: "*", 
    redirect: `/${i18n.locale}` 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
