<template>
  <div class="box" :style="image">
    <h1>{{ answer }}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      answer: "",
      image: {}
    };
  },
  mounted() {
    axios
      .get("https://yesno.wtf/api")
      .then(res => {
        this.answer = res.data.answer;
        this.image.backgroundImage = `url(${res.data.image})`;
      })
      .catch(err => {
        this.answer = "¡ERROR!";
        console.error(err);
      });
  }
};
</script>

<style lang="less" scoped>
.box {
  min-height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: green;
  border: 1px solid red;
  color: white;
  background-size: 550px;
}
</style>
