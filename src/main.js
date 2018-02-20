import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueResource from 'vue-resource';
import {store} from './store/store.js'
import MultiLanguage from 'vue-multilanguage'
import {routes} from './routes.js'
import language from './lang/language'
import socketio from 'socket.io-client';
import VueSocketio from 'vue-socket.io';
import "./filters/filters.js";

Vue.use(VueRouter);
Vue.use(MultiLanguage, language)
Vue.use(VueResource);
Vue.use(VueSocketio, socketio('http://localhost:3000'), store);
Vue.http.options.root = 'http://localhost:3000';

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
