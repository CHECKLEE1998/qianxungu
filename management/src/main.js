import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Ui 框架
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

// 公用插件
import './mixin'
// import VueResource from 'vue-resource'
import './apis/mtaxios'

// 接口
import './apis'
// 样式
import 'reset.css'
import './style/font/iconfont.css'

Vue.use(ElementUi)
Vue.use(iView);
// Vue.use(VueResource)

Vue.config.productionTip = false

// console.log(process.env)
// 路由守卫 -- 判断是否已登入
router.beforeEach((to,from,next)=>{
  // console.log(to,from,next);
  if(to.path === '/Login') {

    next();
  } else {
    var token = localStorage.getItem("token");
    // console.log(token);

    // 目前处于开发阶段 参数只填true和false
    if(true) {
      next();
    } else {
      next({path:'/Login',query:{redirector: to.path}})
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
