<template>
  <div class="container">
    <h2>yoda Cute</h2>
    <img src="https://i.imgur.com/bN6KkIN.jpg" alt="Mr. Cat" />
  </div>
</template>
<style lang="less">
.container {
  width: 500px;
  margin: auto;
  & img {
    max-width: 90%;
    border: 1px solid black;
    -webkit-box-shadow: 10px 10px 5px 5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 5px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 5px rgba(0, 0, 0, 0.75);
  }
}
</style>
