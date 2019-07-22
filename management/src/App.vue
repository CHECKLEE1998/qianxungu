<template>
  <div id="app">
    <transition name="all">
    
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  
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
