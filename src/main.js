import Vue from 'vue';
import App from './App.vue';
import { default as MyComponnets } from './common';
import router from './Router';
import store from './Store/index';
Vue.config.productionTip = false

Vue.use(MyComponnets);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
