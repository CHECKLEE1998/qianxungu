<template>
  <div id="Calendar">
    <div>
      <div class="date_all">
        <div>
      <Row>
        <Col span="12">
          <div class="froms">
            <DatePicker
              type="date"
              :start-date="new Date(1991, 4, 14)"
              placeholder="Select date"
              style="width: 300px"
              v-model="fromday"
            ></DatePicker>
          </div>
        </Col>

        <Col span="13">
          <div class="tos">
            <DatePicker
              type="date"
              :start-date="new Date(1991, 4, 14)"
              placeholder="Select date"
              style="width: 300px"
            ></DatePicker>
          </div>
        </Col>
      </Row>
      </div>
      <div class="date_btn">
        <Button type="primary" shape="circle" icon="ios-search">Search</Button>
      </div>
      </div>
      <el-calendar v-model="value"></el-calendar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      value: new Date(),
      fromday: '',
    };
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      console.log(this.fromday)
    }
  },
};
</script>

<style lang="scss" scoped>
.froms {
  margin: 5px 0;
}
.tos {
  margin: 5px 0;
}
.date_all {
  display: flex;
  align-items: center;
}
</style>
