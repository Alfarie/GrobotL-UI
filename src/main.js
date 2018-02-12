import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {store} from './store/store.js'
import MultiLanguage from 'vue-multilanguage'

import {
  routes
} from './routes.js'
import language from './lang/language'

Vue.use(VueRouter);

Vue.use(MultiLanguage, language)

const router = new VueRouter({
  mode: 'history',
  routes,
});

Vue.filter('toUpperCase', (value) => {
  return value.toUpperCase();
})

Vue.filter('minToTime', (value) => {
  let h = (Math.floor(value / 60));
  h = h < 10 ? '0' + h : h;
  let min = value % 60;
  min = min < 10 ? '0' + min : min;
  return h + ':' + min;
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
