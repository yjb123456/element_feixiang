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
        },
        {
          path: "/C_user",
          name: "c_user",
          component: () => import('./components/C_user')
        },
        {
          path: "/C_finance",
          name: "c_finance",
          component: () => import('./components/C_finance')
        }
        ,
        {
          path: "/C_general",
          name: "c_general",
          component: () => import('./components/Set/C_general')
        },
        {
          path: "/C_regard",
          name: "c_regard",
          component: () => import('./components/Set/C_regard')
        }
        ,
        {
          path: "/C_staff",
          name: "c_staff",
          component: () => import('./components/Set/C_staff')
        },
        {
          path: "/C_role",
          name: "c_role",
          component: () => import('./components/Set/C_role')
        },
        {
          path: "/C_log",
          name: "c_log",
          component: () => import('./components/Set/C_log')
        },
        {
          path: "/Compile",
          name: "compile",
          component: () => import('./components/Set/compoents/Compile.vue')
        },
        {
          path: "/Xinzheng",
          name: "xinzheng",
          component: () => import('./components/Set/compoents/Xinzheng.vue')
        }
        ,
        {
          path: "/Xqing",
          name: "xqing",
          component: () => import('./components/C_user/Xqing.vue')
        },
        {
          path: "/Details",
          name: "details",
          component: () => import('./components/C_order/details/Details.vue')
        }
        ,
        {
          path: "/Details2",
          name: "details2",
          component: () => import('./components/C_order/details/Details2.vue')
        }
        ,
        {
          path: "/Details3",
          name: "details3",
          component: () => import('./components/C_order/details/Details3.vue')
        }
        ,
        {
          path: "/Details4",
          name: "details4",
          component: () => import('./components/C_order/details/Details4.vue')
        }
        ,
        {
          path: "/Insert",
          name: "insert",
          component: () => import('./components//article/C_Carousel/insert.vue')
        }
        ,
        {
          path: "/Insert2",
          name: "insert2",
          component: () => import('./components//article/C_activities/insert.vue')
        }
        ,
        {
          path: "/Insert3",
          name: "insert3",
          component: () => import('./components//article/C_cducation/insert.vue')
        }
        ,
        {
          path: "/Insert4",
          name: "insert4",
          component: () => import('./components//article/C_course/insert.vue')
        }
        ,
        {
          path: "/Insert5",
          name: "insert5",
          component: () => import('./components//article/C_teachers/insert.vue')
        }
      ]
    }
  ]
});
