<template>
  <div id="Messagers">
    <!-- Title -->
    <div class="cov">
      <h2>留言系统</h2>
    </div>

    <!-- 操作台 -->
    <div>
      <div class="econ">
        <div class="titles">
            <span>留言主题</span>
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
        </div>
        <div class="names">
            <span>留言人姓名</span>
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
        </div>
      </div>

      <el-form ref="form" :model="sizeForm" label-width="82px">
        <el-form-item label="留言内容">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
      </el-form>

      <div class="btns">
        <el-button type="primary" round>添加您的留言</el-button>
        <el-button type="danger" round>重置</el-button>
      </div>
    </div>

    <!-- 内容 -->
    <div class="content">
      <el-collapse
        v-model="activeName"
        name="index"
        v-for="(item,index) in messList"
        :key="index + item"
      >
        <el-collapse-item :title="item.title">
          <div>{{item.mess}}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "Messagers",
  data() {
    return {
      // 测试
      messList: [
        {
          mess: "你好你好你好你好你好你好你好你好你好你好你好你好你好",
          title: "留言内容"
        },
        {
          mess: "HelloHelloHelloHelloHelloHelloHelloHelloHelloHello",
          title: "留言内容"
        },
        {
          mess: "ONGONGONGONGONGONGONGONGONGONGONGONGONGONGONGONGONG",
          title: "留言内容"
        }
      ],

      // 操作台
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
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
          }
      }
      .names {
          
          padding: 5px 0;
          display: flex;
          align-items: center;
          span {
              display: inline-block;
              width: 100px;
              color: #333;
          }
      }
  }
  .btns {
      padding: 0 0 20px 0;
  }
}
</style>
