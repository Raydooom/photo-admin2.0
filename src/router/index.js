import Vue from "vue";
import Router from "vue-router";
import layout from "@/views/layout/index";
import childrenView from "@/views/layout/childrenView";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      component: () => import("@/views/pages/login")
    },
    {
      path: "/",
      name: "home",
      redirect: "/dashBoard",
      component: layout,
      children: [
        {
          path: "/dashBoard",
          component: () => import("@/views/pages/dashBoard"),
          isMenu: true,
          meta: {
            title: "数据统计"
          }
        },
        {
          path: "/articleModule",
          component: childrenView,
          redirect: "/articleAdd",
          isMenu: true,
          meta: {
            title: "文章管理"
          },
          children: [
            {
              path: "/articleList",
              isMenu: true,
              component: () => import("@/views/pages/article/articleList"),
              meta: {
                title: "文章列表"
              }
            },
            {
              path: "/articleAdd",
              component: () => import("@/views/pages/article/articleAdd"),
              isMenu: true,
              meta: {
                title: "添加文章"
              }
            },
            {
              path: "/preview/:id",
              component: () => import("@/views/pages/article/articleView"),
              name: "articleView",
              meta: {
                title: "预览文章"
              }
            },
            {
              path: "/edit/:id",
              component: () => import("@/views/pages/article/articleEdit"),
              name: "edit",
              meta: {
                title: "编辑文章"
              }
            },
            {
              path: "/articleAsync",
              component: () => import("@/views/pages/article/articleAsync"),
              isMenu: true,
              name: "edit",
              meta: {
                title: "从公众号同步文章"
              }
            }
          ]
        },
        {
          path: "/dailyModule",
          component: childrenView,
          redirect: "/dailyList",
          isMenu: true,
          meta: {
            title: "文章管理"
          },
          children: [
            {
              path: "/dailyList",
              component: () => import("@/views/pages/daily/list"),
              isMenu: true,
              meta: {
                title: "每日精选"
              }
            },
            {
              path: "/dailyAdd",
              component: () => import("@/views/pages/daily/add"),
              isMenu: true,
              meta: {
                title: "添加精选"
              }
            },
            {
              path: "/dailyEdit/:id",
              component: () => import("@/views/pages/daily/edit"),
              meta: {
                title: "添加精选"
              }
            }
          ]
        },

        {
          path: "/aboutDeveloper",
          name: "aboutDeveloper",
          component: () => import("@/views/pages/aboutDeveloper"),
          isMenu: true,
          meta: {
            title: "关于开发者"
          }
        },
        {
          path: "/aboutWxApp",
          name: "aboutWxApp",
          component: () => import("@/views/pages/aboutWxApp"),
          isMenu: true,
          meta: {
            title: "关于小程序"
          }
        }
      ]
    },
    {
      path: "*",
      name: "errorPage",
      component: () => import("@/views/pages/errorPage")
    }
  ]
});
