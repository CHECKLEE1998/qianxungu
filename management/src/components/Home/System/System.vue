<template>
  <div id="System">
    <div class="component">
      <Button type="primary" @click="modal1 = true">新增管理</Button>
      <Modal v-model="modal1" title="新用户注册" @on-ok="ok" @on-cancel="cancel">
        <div class="newUsername">
          <span>账号：</span>
          <input type="text" placeholder="请输入您的账号" v-model="newUsername" />
        </div>
        <div class="newUsername">
          <span>昵称：</span>
          <input type="text" placeholder="请输入您的昵称" v-model="newNames" />
        </div>
        <div class="newPassword">
          <span>密码：</span>
          <input type="password" placeholder="请输入您的密码" v-model="newPassword" />
        </div>
        <div class="isnewPassword">
          <span>确认密码：</span>
          <input type="password" placeholder="请再次输入您的密码" v-model="isnewPassword" />
        </div>
      </Modal>
    </div>

    <!-- 注册表单 -->

    <div class="content">
      <div class="table-top">
        <ul>
          <li>UserName</li>
          <li>Name</li>
          <li>Operation</li>
        </ul>
      </div>
      <div class="contents">
        <ul v-for="(item,index) in AdminList" :key="item.username + index">
          <li>{{item.username}}</li>
          <li>{{item.nickname}}</li>
          <li>
            <span>
              <el-button type="text" @click="current(item)">编辑</el-button>
            </span>
            <span>
              <el-button type="text" @click="open" class="del">删除管理员</el-button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "System",
  data() {
    return {
      AdminList: [],
      // 注册表单
      modal1: false,
      newUsername: "",
      newPassword: "",
      isnewPassword: "",
      newNames: "",

      test: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    ok() {
      if (this.newPassword != this.isnewPassword) {
        alert("两次密码不匹配");
      } else if (!this.newUsername) {
        alert("您输入的账号存在异常");
      } else if (!this.newNames) {
        alert("请输入您的昵称");
      } else {
        this.$http.post(this.$apis.addNewAdmin,{username:this.newUsername,password:this.newPassword,roles:["12131231safadsf1"],nickname:this.newNames}).then((res)=>{
          router.go(0)
        })
      }
    },
    cancel() {
      this.$Message.info("注册取消");
    },
    // 获取角色
    getData() {
      this.$http.get(this.$apis.findAdmins).then(resp => {
        this.AdminList = resp.data.data;
        console.log(this.AdminList);
      });
    },
    // 删除
    open() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    current(item) {
      console.log(item)
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
  transition: 0.5s;
  z-index: 999;
  position: absolute;
  top: 150px;
  left: 300px;
  background: #fff;
  width: 400px;
  height: 500px;
  border: 0.5px solid rgb(189, 189, 189);
  padding: 20px 20px 10px 0;
}
.btns {
  margin-top: 20px;
}
.newUsername {
  margin: 8px 5px;
  span {
    display: inline-block;
    width: 80px;
    text-align: right;
  }
  input {
    width: 250px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid rgb(196, 196, 196);
    outline: none;
    text-indent: 1em;
    &:focus {
      border: 1px solid rgb(78, 148, 240);
    }
  }
}
.newPassword {
  margin: 8px 5px;
  span {
    display: inline-block;
    width: 80px;
    text-align: right;
  }
  input {
    width: 250px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid rgb(196, 196, 196);
    outline: none;
    text-indent: 1em;
    &:focus {
      border: 1px solid rgb(78, 148, 240);
    }
  }
}
.isnewPassword {
  margin: 8px 5px;
  span {
    display: inline-block;
    width: 80px;
    text-align: right;
  }
  input {
    width: 250px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid rgb(196, 196, 196);
    outline: none;
    text-indent: 1em;
    &:focus {
      border: 1px solid rgb(78, 148, 240);
    }
  }
}
.content {
  .table-top {
    margin-top: 10px;
    ul {
      background: rgb(230, 230, 230);
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-around;
      text-align: center;
    }
  }
  .contents {
    ul {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-around;
      text-align: center;
      border-bottom: 0.5px solid rgb(230, 230, 230);
      li {
        width: 30%;
        text-align: center;
        span {
          padding: 0 10px 0 0;
        }
        .del {
          color: rgb(253, 69, 69);
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
