<template>
  <div id="System">
    <div class="component">
      <el-button type="text" @click="openReg()">新增用户</el-button>
    </div>

    <!-- 注册表单 -->
    <div class="RegistrationForm" v-show="isRegistrationForm">
      <h2>账号新增</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model.number="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
      <div class="btns">
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
        </div>
      </el-form>
    </div>

    <div class="content">
      <template>
        <el-table
          :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%"
        >
          <el-table-column label="UserName" prop="date"></el-table-column>
          <el-table-column label="Name" prop="name"></el-table-column>
          <el-table-column align="right">
            <template slot="header">
              <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
            </template>
            <template>
              <el-button size="mini">Edit</el-button>
              <el-button size="mini" type="danger">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "System",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      setTimeout(() => {
        if (!String.isInteger(value)) {
          callback(new Error("请输入正确的账号格式"));
        } else {
          if (value < 18) {
            callback(new Error("账号必须是6位至16位"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      // 注册表单
      isRegistrationForm:false,
      ruleForm: {
        pass: "",
        checkPass: "",
        username: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkAge, trigger: "blur" }]
      },
      test: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      search: ""
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.isRegistrationForm = false
    },
    openReg() {
      this.isRegistrationForm = true
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}
.RegistrationForm {
  transition: .5s;
  z-index: 999;
  position: absolute;
  top: 150px;
  left: 300px;
  background: #fff;
  width: 400px;
  height: 500px;
  border: .5px solid rgb(189, 189, 189);
  padding: 20px 20px 10px 0;
}
  .btns {
    margin-top: 20px;
  }
</style>
