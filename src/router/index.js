import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "commonlayout",
    component: () => import('@/components/CommonLayout.vue'),
    children:[
      {
        path:'',
        name: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/detail/:id',
        //name: 'detail',
        component: () => import('@/views/Detail.vue')
      },
      {
        path: '/personal',
        name: 'personal',
        component: () => import('@/views/Personal.vue'),
        meta:{
          requireAuth: true // 为true表示这个页面需要登录权限
        }
      },
      {
        path: '/article',
        name: 'article',
        component: () => import('@/views/Article.vue'),
        meta:{
          requireAuth: true // 为true表示这个页面需要登录权限
        }
      },
      {
        path: '/article/edit',
        naem: 'edit',
        component: () => import('@/views/ArticleEdit.vue'),
        meta:{
          requireAuth: true // 为true表示这个页面需要登录权限
        }
      },
        {
          path: '/article/edit/:id',
          naem: 'update',
          component: () => import('@/views/ArticleEdit.vue'),
          meta:{
            requireAuth: true // 为true表示这个页面需要登录权限
          }
        }
      
    ]
  },
  {
    path: "/login",
    name: 'login',
    component: () => import('@/views/Login.vue')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
