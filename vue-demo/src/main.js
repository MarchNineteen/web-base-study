import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router';
// import Routes from './router';
// import Vuex from 'vuex';
import Store from "./store";
// import api from './api';
// import md5 from 'md5';

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

Vue.config.productionTip = false;

// Vue.use(VueRouter);
// const router = new VueRouter(Routes);

// Vue.use(Vuex);
// const store = new Vuex.Store(Store);

// Vue.prototype.$api = api;
// Vue.prototype.$md5 = md5;

new Vue({
	// router,
	// store,
  render: h => h(App),
}).$mount('#app');
