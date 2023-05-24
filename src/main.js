import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/scss/reset.scss';
import '@/assets/font/iconfont.css';
import '@/assets/scss/common.scss';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import setAxios from "./setAxios";
import Cookie from 'js-cookie'

setAxios()
Vue.config.productionTip = false;
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.use(mavonEditor)

router.beforeEach((to,from,next)=>{
  store.commit('setToken',Cookie.get('token'))
  if(store.state.token){
    store.commit('changIsSignIn',1)
  }
  // 如果页面需要登录权限则执行下面代码
  if(to.meta.requireAuth){
    // 如果有token就next()
    if(store.state.token){
      next()
      // 没有就跳转的/login
    } else {
      next({path: '/login'})
    }
    // 没有就next()
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
