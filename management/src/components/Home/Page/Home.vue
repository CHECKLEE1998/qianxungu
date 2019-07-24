<template>
  <div id="Home">
    <sider-bar></sider-bar>
    <div class="mainContainer">
      <div class="topBar">
        <el-button type="danger" @click="centerDialogVisible = true">点击注销</el-button>

        <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
          <span>点击 "确定" 后将返回登入页面,您确定需要注销吗</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="logout">确 定</el-button>
          </span>
        </el-dialog>
      </div>
      <div class="mainContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SiderBar from "./Navigation/Navigation";
export default {
  name: "Home",
  components: { SiderBar },
  data() {
      return {
          centerDialogVisible: false
      }
  },
  methods: {
    logout() {
      this.$router.push({ path: "/Login" });
      localStorage.removeItem("token");
    }
  }
};
</script>

<style lang="scss" scoped>
#Home {
  width: 100%;
  height: 100%;
  background: rgb(146, 35, 35);
  display: flex;
  flex-direction: row;
}
.mainContainer {
  position: absolute;
  left: 250px;
  right: 0px;
  top: 0;
  bottom: 0;
  height: 100%;
  background: rgb(12, 73, 143);
}
.topBar {
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
.mainContent {
  position: absolute;
  top: 44px;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
}
</style>
