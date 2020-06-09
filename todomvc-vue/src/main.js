import Vue from 'vue'
import App from './App.vue'
import VueRouter from  'vue-router'
import Vuex from 'vuex'
// import '../node_modules/todomvc-app-css/index.css'
// import '../node_modules/todomvc-common/base.css'
/***
 * 1.需要三个组件
 * 2.需要路由
 *    主页面? ----  all
 *                  all  active  completed
 *    
 * 3.需要数组
 * 4.需要vuex
 */
Vue.use(Vuex)
Vue.use(VueRouter)
const store = new Vuex.Store({
  state:{
    todos:[
    {id:1,todoName:"吃饭",completed:true},
    {id:2,todoName:"跑步",completed:true},
    {id:3,todoName:"睡觉",completed:false}
  ]
  },
  mutations:{
    insert01(state,data){
      state.todos.push(data)
    },
    delete01(state,id){
        //完成删除功能
    for (let i=0;i<state.todos.length;i++) {
      if(state.todos[i].id==id){
        state.todos.splice(i,1)
      }
    }
    },
    update01(){}
    
  }
})
const router = new VueRouter({
  routes:[
    {path:"/",redirect:"/all"},
    {path:"/all",component:()=>import('./components/all.vue')},
    {path:"/active",component:()=>import('./components/active.vue')},
    {path:"/completed",component:()=>import('./components/completed.vue')}
  ]
})
Vue.directive('focus',{
  inserted:function(el){
    el.focus()
  }
})
Vue.config.productionTip = false

new Vue({
 
  store,
  router,
  render: h => h(App),
}).$mount('#app')
