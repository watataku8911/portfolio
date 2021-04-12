import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Paginate from "vuejs-paginate"
import vueSmoothScroll from "vue-smooth-scroll"
import VueAnalytics from 'vue-analytics'
import './registerServiceWorker'
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"

Vue.config.productionTip = false

Vue.component("paginate", Paginate)
Vue.use(vueSmoothScroll)
Vue.use(VueAnalytics, {
  id: 'G-77MF6GS3EG',
  router
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
