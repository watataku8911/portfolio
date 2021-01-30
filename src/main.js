// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Paginate from "vuejs-paginate";
import vueSmoothScroll from "vue-smooth-scroll";

import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

Vue.component("paginate", Paginate);
Vue.use(vueSmoothScroll);
Vue.config.productionTip = false;



/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
