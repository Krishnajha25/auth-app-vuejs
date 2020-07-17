import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase'

Vue.config.productionTip = false

const configOptions = {
    apiKey: "AIzaSyBoi6BMUKB0Qsao8JeWKO2Rruq7Z20d7Zs",
    authDomain: "vue-firebase-auth-app-a01b4.firebaseapp.com",
    databaseURL: "https://vue-firebase-auth-app-a01b4.firebaseio.com",
    projectId: "vue-firebase-auth-app-a01b4",
    storageBucket: "vue-firebase-auth-app-a01b4.appspot.com",
    messagingSenderId: "828477450680",
    appId: "1:828477450680:web:ff6284c7009f01ff4a474d",
    measurementId: "G-RSJKWLHQ0W"
}

firebase.initializeApp(configOptions);
firebase.analytics();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
