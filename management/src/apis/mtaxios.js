import axios from 'axios'
import Vue from 'vue'
// 获取配置好的 .env.development和.env.production里配置好的的BASEURL

axios.defaults.baseURL = process.env.VUE_APP_BASEURL;
console.log(axios.defaults.baseURL)
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    var token = localStorage.getItem("token");
    config.headers.common['Authorization']='Bearer '+token;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
var mtAxios = {
    get:function(url,pramas){
      
      console.log('1')
        return axios.get(url,{params:pramas});
    },
    post:function(url,pramas){
        return axios.post(url,pramas);
    }
}

// 为Vue实例对象创建一个$http属性，该属性指向自定义的axios组件
// 以后所有的Vue组件都可以直接通过this.$http的方式访问get和post请求
// this.$http.get() 或 this.$http.post();
Vue.prototype.$http = mtAxios;
console.log(Vue.prototype)
export default {}