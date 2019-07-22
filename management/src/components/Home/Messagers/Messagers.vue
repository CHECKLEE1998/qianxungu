<template>
  <el-form id="Messagers">
    <!-- Title -->
    <div class="cov">
      <h2>留言系统</h2>
    </div>

    <!-- 操作台 -->
    <el-form>
      <div class="econ">
        <div class="titles">
          <span>留言ID</span>
          <el-input placeholder="请输入内容"  v-model="MessID"></el-input>
        </div>
        <div class="names">
          <span>留言人昵称</span>
          <el-input placeholder="请输入内容" v-model="MessName"></el-input>
        </div>
        <div class="cons">
          <span>留言内容</span>
          <el-input placeholder="请输入内容" v-model="MessCon"></el-input>
        </div>
      </div>

    

      <div class="btns">
        <el-button type="primary" round @click="addMess()">添加您的留言</el-button>
        <el-button type="danger" round @click="resets()">重置</el-button>
      </div>
    </el-form>

    <!-- 内容 -->
    <div class="content">
      <el-collapse name="index" v-for="(item,index) in messList" :key="index + item">
        <el-collapse-item :title="`${item.userId} 给 ${item.nickName} 的留言`">
          <div>{{item.content}}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </el-form>
</template>

<script>
export default {
  name: "Messagers",
  data() {
    return {
      MessID: '',
      MessName: '',
      MessCon: '',
      messList: [],
    };
  },
  methods: {
    // addMess() {
    //   this.$http.post(this.$apis.leaveMessage,{userId:this.MessID, nickName:this.MessName, content: this.MessCon}).then((res)=>{
    //     this.messList = res.config.data
    //     console.log(this.messList)
    //   })
    // },
    // 重置
    resets() {
      this.MessID = "",
      this.MessName = "",
      this.MessCon = ""
    }
  }
};
</script>

<style lang="scss" scoped>
#Messagers {
  .cov {
    display: flex;
    h2 {
      height: 50px;
      font-size: 24px;
      font-weight: 700;
      line-height: 50px;
      width: 100px;
    }
  }
  .econ {
    width: 500px;
    .titles {
      padding: 5px 0;
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        width: 100px;
        color: #333;
        font-size: 14px;
        text-align: right;
        padding: 0 12px 0 0;
      }
    }
    .names {
      padding: 5px 0;
      display: flex;
      align-items: center;

      span {
        padding: 0 12px 0 0;
        text-align: right;
        display: inline-block;
        width: 100px;
        color: #333;
        font-size: 14px;
      }
    }
    .cons {
      padding: 5px 0;
      display: flex;
      align-items: center;

      span {
        padding: 0 12px 0 0;
        text-align: right;
        display: inline-block;
        width: 100px;
        color: #333;
        font-size: 14px;
      }
    }
  }
  .btns {
    padding: 10px 0 20px 0;
  }
}
</style>
