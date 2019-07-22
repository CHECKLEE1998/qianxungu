import Vue from 'vue'

var apis = {

    // 系统登入
    LoginSystem: '/signin',

    // 留言
    leaveMessage: '/message/addNewMessage',
}

Vue.prototype.$apis = apis;
export default apis;