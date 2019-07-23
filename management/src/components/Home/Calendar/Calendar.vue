<template>
  <div id="Calendar">
    <div>
      <el-calendar v-model="value"></el-calendar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
   data() {
      return {
        value: new Date()
      }
    }
};
</script>

<style lang="scss" scoped>
</style>
