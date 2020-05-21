import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'vue-material-design-icons/styles.css'
import 'material-design-icons'
import * as fb from 'firebase'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyC9z_D6i1JZUxHvy_90lj7F01Aw3Q2bMcw',
      authDomain: 'its-ads-project-53b9b.firebaseapp.com',
      databaseURL: 'https://its-ads-project-53b9b.firebaseio.com',
      projectId: 'its-ads-project-53b9b',
      storageBucket: 'its-ads-project-53b9b.appspot.com',
      messagingSenderId: '1093252213958',
      appId: '1:1093252213958:web:e1364b8bef1f350e517bc7'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')
