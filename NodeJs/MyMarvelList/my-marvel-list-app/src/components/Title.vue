<template>
  <router-link to="/">
    <h1 class="tittle">{{text}}</h1>
  </router-link>
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
.tittle:link {
  cursor: grab;
}
</style>