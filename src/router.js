import Vue from "vue";
import Router from "vue-router";
import Profile from "@/views/Profile";
import Content from "@/views/Content";
import Detail from "@/views/Detail";
import Contact from "@/views/Contact";

import NotFound from "@/views/error/404.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Profile",
      component: Profile,
      meta: { title: "Watataku’s ポートフォリオサイト | PLOFILE" },
    },
    {
      path: "/works/pages/:page/categoryId/:categoryId",
      name: "Content",
      component: Content,
      meta: { title: "Watataku’s ポートフォリオサイト | WOKES" },
    },
    {
      path: "/works/detail/:id/page/:page/categoryId/:categoryId",
      name: "Detail",
      component: Detail,
      meta: { title: "Watataku’s ポートフォリオサイト | DETAILE" },
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
      meta: { title: "Watataku’s ポートフォリオサイト | CONTACT" },
    },

    {
      path: "*",
      name: "notFound",
      component: NotFound,
      meta: { title: "Watataku’s ポートフォリオサイト | 404 NOT FOUND" },
    },
  ],
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
  },
});
