<template>
  <div id="app">
    <transition name="all">
    
      <router-view v-if="isRouterAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name:"app",
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive:true
    }
  },
  // 刷新跳转至首页
  created(){ 
        if(this.$router.path !== '/Home/System'){
            this.$router.replace('/Home/System')
        }
    },
  methods: {
    // 数据修改刷新页面
        reload() {
          this.isRouterAlive = false
          this.$nextTick(function(){
            this.isRouterAlive = true
          })
        }
    },
}
</script>

<style lang="scss" scoped>
  #app {
    position: absolute;
    height: 100%;
    width: 100%;
    background: orange;
  }
  .all {
    transition: .5s;
  }
</style>
