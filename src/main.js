import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import MultiLanguage from 'vue-multilanguage'

import {routes} from './router.js'
import language from './lang/language'

Vue.use(VueRouter);

Vue.use(MultiLanguage,language)

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
