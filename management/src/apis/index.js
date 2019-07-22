import Vue from 'vue'

var apis = {

    // 系统登入
    LoginSystem: '/signin',

    // 留言管理
    leaveMessage: '/message/addNewMessage',

    // 日历查询背景图
    QueryImg:'/webapp/findDailyBackground',

    // 类型管理
    DelType: '/music/deleteMusicType',
    AddType: '/music/addNewMusicType',
    SearchType: '/music/findMusicTypes'
}

Vue.prototype.$apis = apis;
export default apis;