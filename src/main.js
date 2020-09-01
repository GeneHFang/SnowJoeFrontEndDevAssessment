import Vue from 'vue'
import ScrollFixHeader from 'vuejs-scroll-fixed-header';
import App from './App.vue'

Vue.config.productionTip = false;
Vue.use(ScrollFixHeader);

new Vue({
  render: h => h(App),
}).$mount('#app')
