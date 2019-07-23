<template>
    <div id="login">
      <div class="form">
        <form>
          <input type="text" class="text" placeholder="请输入账号" v-model="username">
          <input type="password" class="text" placeholder="请输入密码" v-model="password">
          <div class="svg" @click="upData()" style="width:160px;height:50px;margin-bottom:10px;"></div>
          <input type="text" class="text" placeholder="请输入验证码" v-model="verification">
        </form>
        <button class="loginBtn" @click="login()">登录</button>
      </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
          code:"",
          username:"",
          password:"",
          verification:"",
          x:"",
        }
    },
    created() {
        this.getData()
    },
    methods:{
      async getData(){
        let res = await this.$http.get(this.$apis.dynamicVerification)
        console.log(res.data.data);
        let svg = document.getElementsByClassName("svg")[0];
        svg.innerHTML = res.data.data.data
        this.code = res.data.data.text
        console.log(this.code)
      },
      async upData(){
        let res = await this.$http.get(this.$apis.dynamicVerification)
        let svg = document.getElementsByClassName("svg")[0];
        svg.innerHTML = res.data.data.data
        this.code = res.data.data.text
        console.log(this.code)
      },
      login(){
        this.$http.post(
            "http://localhost:3000/signin",
            {username:this.username,password:this.password},
        ).then(response => {
            this.x= response
            console.log(response);
            if(response.data.token && this.verification==this.code){
              this.$router.push({path: "/Home"})
            }else{
              alert("验证码错误")
              this.upData()
            }
        })
      } 
    }
    
}
</script>
<style lang="scss" scoped>
  #login {  
    width: 100vw;
    height: 100vh;  
    background: pink;
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563770984355&di=2c17f3a939ca6ea563cf7d9dc98ce8f3&imgtype=0&src=http%3A%2F%2Fp1.pstatp.com%2Flarge%2F4e68000471ad50bfecec");
    background-size:100% 100%;
  }
  .form{
    height: 200px;
    width: 300px;
    margin: 0 auto;
    padding: 13%;
    .text{
      width: 300px;
      border: none;
      background: rgba(0,0,0,0);
      border-bottom: 1px solid pink;
      margin-bottom:40px;
      font-size: 16px;
      color:cyan;
      outline: none;
    }
    .loginBtn{
      width: 300px;
      background: rgba(0,0,0,0);
      border: 1px solid pink;
      height:30px;
      border-radius: 4px;
      outline: none;
      margin-top: 40px;
      color:cyan
    }
  }
</style>
