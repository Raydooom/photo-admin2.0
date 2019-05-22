import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      component: () => import("@/views/login")
    },
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home"),
      children: [
        {
          path: "dashBoard",
          component: () => import("@/views/dashBoard"),
          meta: {
            title: "数据统计"
          }
        },
        {
          path: "articleList",
          component: () => import("@/views/articleList"),
          meta: {
            title: "文章列表"
          }
        },
        {
          path: "articleAdd",
          component: () => import("@/views/articleAdd"),
          meta: {
            title: "添加文章"
          }
        },
        {
          path: "preview/:id",
          component: () => import("@/views/articleView"),
          name: "articleView",
          meta: {
            title: "预览文章"
          }
        },
        {
          path: "edit/:id",
          component: () => import("@/views/articleEdit"),
          name: "edit",
          meta: {
            title: "编辑文章"
          }
        },
        {
          path: "articleAsync",
          component: () => import("@/views/articleAsync"),
          name: "edit",
          meta: {
            title: "从公众号同步文章"
          }
        },
        {
          path: "dailyList",
          component: () => import("@/views/daily/list"),
          meta: {
            title: "每日精选"
          }
        },
        {
          path: "dailyAdd",
          component: () => import("@/views/daily/add"),
          meta: {
            title: "添加精选"
          }
        },
        {
          path: "dailyEdit/:id",
          component: () => import("@/views/daily/edit"),
          meta: {
            title: "添加精选"
          }
        },
        {
          path: "/aboutDeveloper",
          name: "aboutDeveloper",
          component: () => import("@/views/aboutDeveloper"),
          meta: {
            title: "关于开发者"
          }
        },
        {
          path: "/aboutWxApp",
          name: "aboutWxApp",
          component: () => import("@/views/aboutWxApp"),
          meta: {
            title: "关于小程序"
          }
        }
      ]
    },
    {
      path: "*",
      name: "errorPage",
      component: () => import("@/views/errorPage")
    }
  ]
});
