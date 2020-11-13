import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/Home"
    },
    {
      path: "/Login",
      name: "login",
      component: () => import('./views/Login')
    },
    {
      path: "/Home",
      name: "home",
      component: () => import('./views/Home'),
      children: [
        {
          path: "/Home",
          redirect: "/C_course"
        },
        {
          path: "/C_home",
          name: "c_home",
          component: () => import('./components/C_home')
        },
        {
          path: "/C_Carousel",
          name: "c_Carousel",
          component: () => import('./components/article/C_Carousel')
        },
        {
          path: "/C_course",
          name: "c_course",
          component: () => import('./components/article/C_course')
        }
        ,
        {
          path: "/C_cducation",
          name: "c_cducation",
          component: () => import('./components/article/C_cducation')
        },
        {
          path: "/C_activities",
          name: "c_activities",
          component: () => import('./components/article/C_activities')
        },
        {
          path: "/C_teachers",
          name: "c_teachers",
          component: () => import('./components/article/C_teachers')
        },
        {
          path: "/C_order",
          name: "c_order",
          component: () => import('./components/C_order')
        }
      ]
    }
  ]
});
