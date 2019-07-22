import Vue from 'vue'

var apis = {

    // 系统登入
    LoginSystem: '/signin',

    // 留言
    leaveMessage: '/message/addNewMessage',

    // 日历
    datas:'/webapp/findDailyBackground'
}

Vue.prototype.$apis = apis;
export default apis;