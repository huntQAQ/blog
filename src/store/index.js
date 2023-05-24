import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    isSignIn: 0 // 0表示未登录，1表示登录
  },
  getters: {},
  // mutations 是用于修改state的值
  mutations: {
    // n第二个参数是传进来的值
    changIsSignIn(state,n){
      state.isSignIn = n
    },
    // 设置vuex的token
    setToken(state,val){
      state.token = val
    }
  },
  actions: {},
  modules: {},
});
