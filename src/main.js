import Vue from 'vue';
import App from './App.vue';
import { default as MyComponnets } from './common';

Vue.config.productionTip = false

Vue.use(MyComponnets);

new Vue({
  render: h => h(App),
}).$mount('#app')
