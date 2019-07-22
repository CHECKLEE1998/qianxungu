<template>
  <div id="app">
    <transition name="all">
    
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  // 刷新跳转至首页
  created(){ 
        if(this.$router.path !== '/Home/System'){
            this.$router.replace('/Home/System')
        }
    }
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
