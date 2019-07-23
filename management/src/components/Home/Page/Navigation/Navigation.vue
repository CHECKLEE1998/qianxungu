<template>
  <div id="Navgation">
    <div>
      <ul class="select">
        <li
          v-for="(item,index) in SystemList"
          :key="item.name + index"
          @click="pushView(item)"
          :class="{'active': item.title == Activesnum}"
        >
        <span :class="`iconfont ${item.icon}`"></span>
        {{item.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Activesnum: "系统管理",
      SystemList: [
        { title: "系统管理", name: "System" ,icon:"icon-xitong"},
        { title: "日历管理", name: "Calendar" ,icon:"icon-rili"},
        { title: "留言管理", name: "Messagers" ,icon:"icon-liuyan"},
        { title: "类型管理", name: "Types" ,icon:"icon-17"},
        { title: "音频管理", name: "Frequency" ,icon:"icon-fenghuangxiangmutubiao_yinpinbofang"}
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
// 点击后样式
.active {
  background: rgb(170, 170, 170);
}
#Navgation {
  background: rgb(238, 238, 238);
  min-height: 500px;
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  &:hover {
    background: rgb(220, 220, 220);
  }
  & > div {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(1) {
      flex-direction: column;
    }
  }
  .select {
    li {
      height: 30px;
      width: 1000px;
      text-align: center;
      line-height: 30px;
      margin-top: 20px;
      transition: 0.2s;
      &:hover {
        background: rgb(173, 173, 173);
      }
    }
  }
}
</style>
