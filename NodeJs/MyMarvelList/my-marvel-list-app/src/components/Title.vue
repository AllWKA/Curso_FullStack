<template>
  <h1>{{text}}</h1>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  color: white;
  text-align: center;
}
</style>