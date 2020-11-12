import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      redirect:"/Home"
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
      children:[
        {
          path:"/Home",
          redirect:"/C_course"
        },
        {
          path: "/C_home",
          name: "c_home",
          component: () => import('./components/C_home')
        },
        {
          path: "/C_Carousel",
          name: "c_Carousel",
          component: () => import('./components/C_Carousel')
        },
        {
          path: "/C_course",
          name: "c_course",
          component: () => import('./components/C_course')
        }
      ]
    }
  ]
});
