<template>
  <div class="box" :style="image">
    <h1>{{ answer }}</h1>
  </div>
</template>

<script>
export default {
  name: "axios",
  data() {
    return {
      answer: "",
      image: {}
    };
  },
  mounted() {
    fetch("https://yesno.wtf/api")
      .then(response => response.json())
      .then(data => {
        this.answer = data.answer;
        this.image.backgroundImage = `url(${data.image})`;
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
  background-color: purple;
  border: 1px solid red;
  color: white;
  background-size: 550px;
}
</style>
