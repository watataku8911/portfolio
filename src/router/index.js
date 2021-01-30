import Vue from "vue";
import Router from "vue-router";

import Profile from "@/pages/Profile";
import Content from "@/pages/Content";
import Detail from "@/pages/Detail";
import Contact from "@/pages/Contact";

import NotFound from "@/pages/error/404.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Profile",
      component: Profile,
      meta: { title: "Watataku’s ポートフォリオサイト | PLOFILE" }
    },
    {
      path: "/works/pages/:page/categoryId/:categoryId",
      name: "Content",
      component: Content,
      meta: { title: "Watataku’s ポートフォリオサイト | WOKES" }
    },
    {
      path: "/works/detail/:id/page/:page/categoryId/:categoryId",
      name: "Detail",
      component: Detail,
      meta: { title: "Watataku’s ポートフォリオサイト | DETAILE" }
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
      meta: { title: "Watataku’s ポートフォリオサイト | CONTACT" }
    },

    {
      path: "*",
      name: "notFound",
      component: NotFound,
      meta: { title: "Watataku’s ポートフォリオサイト | 404 NOT FOUND" }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});
