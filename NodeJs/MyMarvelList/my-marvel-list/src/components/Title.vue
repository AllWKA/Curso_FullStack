<template>
  <div class="title">
    <h1>{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: String
  }
};
</script>

<style>
.title {
  background-color: red;
  max-width: 40%;
  color: white;
  margin-left: 30%;
  text-align: center;
  min-height: 5%;
  height: 100%;
  flex: 1;
}
h1 {
  /* font-size: 100%; */
  height: 100%;
  width: 100%;
  font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>