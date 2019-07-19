<template>
    <div id="Home">
        <sider-bar></sider-bar>
        <div class="mainContainer">
            <div class="topBar">
                <el-button type="danger" size="mini" @click="logout">注销</el-button>
            </div>
            <div class="mainContent">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import SiderBar from './Navigation/Navigation'
export default {
    components:{SiderBar},
    methods:{
        logout(){
            this.$router.push({path:'/Login'});
            localStorage.removeItem("token")
        }
    }
}
</script>

<style lang="scss" scoped>
    #Home {
        width: 100%;
        height: 100%;
        background: rgb(146, 35, 35);
        display: flex;
        flex-direction: row;
    }
    .mainContainer{
        position: absolute;
        left: 250px;
        right: 0px;
        top: 0;
        bottom: 0;
        height: 100%;
        background: rgb(12, 73, 143);
    }
    .topBar{
        padding: 0 20px;
        width: 100%;
        height: 44px;
        background: #fff;
        border-bottom: 1px solid rgb(238, 238, 238);
        text-align: right;
        line-height: 44px;
        padding-right: 20px;
        box-sizing: border-box;
    }
    .mainContent{
        position: absolute;
        top: 44px;
        bottom: 0;
        width: 100%;
        background: #fff;
        padding: 20px;
        box-sizing: border-box;
    }
</style>
