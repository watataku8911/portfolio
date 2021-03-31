import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import Paginate from "vuejs-paginate";
Vue.component("paginate", Paginate);

import vueSmoothScroll from "vue-smooth-scroll";
Vue.use(vueSmoothScroll);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
