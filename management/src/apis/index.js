import Vue from 'vue'

var apis = {

    // 系统登入
    QueryPermissions: '/system/permission/findPermission',
    UpdateTheRole: '/system/role/updateRole',
    DynamicVerification: '/checkDynamicCode',
    AdditionalPermissions: '/system/permission/addNewPermission',
    QueryRole: '/system/role/findRoles',
    RemovePermissions: '/system/permission/deletePermission',
    RemoveRole: '/system/role/deleteRole',
    findAdmins: '/system/admin/findAdmins',
    addNewAdmin: '/system/admin/addNewAdmin',
    LoginSystem: '/signin',
    deleteAdmin: '/system/admin/deleteAdmin',
    addNewRole: '/system/role/addNewRole',

    // 留言管理
    addNewMessage: '/message/addNewMessage',

    // 日历查询背景图
    QueryImg:'/webapp/findDailyBackground',
    setDailyBackgroundLike:'/daily/setDailyBackgroundLike',
    setDailyBackground:'/daily/setDailyBackground',

    // 类型管理
    DelType: '/music/deleteMusicType',
    AddType: '/music/addNewMusicType',
    SearchType: '/music/findMusicTypes'
}

Vue.prototype.$apis = apis;
export default apis;
