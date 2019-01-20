import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import Vuetify from 'vuetify'
import VueCarousel from 'vue-carousel';
import router from './router'
import Router from 'vue-router'

Vue.use(VueCarousel);
Vue.use(Vuetify)
Vue.use(Router)
Vue.use(VueRouter)

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyDI8Ogvynk_ufqwEKHsaBa_GPneoqTI1aM",
  authDomain: "narit-project.firebaseapp.com",
  databaseURL: "https://narit-project.firebaseio.com",
  projectId: "narit-project",
  storageBucket: "narit-project.appspot.com",
  messagingSenderId: "854084737028"
};
firebase.initializeApp(config)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


