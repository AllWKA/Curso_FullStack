<template>
  <div class="nav-bar">
    <h2>Comics</h2>
    <h2>Characters</h2>
    <h2>Series</h2>
    <h2>Events</h2>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Nav",
  components: {}
};
</script>
<style scoped>
.nav-bar {
  display: flex;
  flex-flow: row;
  background-color: red;
  flex-wrap: wrap;
  border: 2px rgb(255, 166, 0) solid;
}
.nav-bar h2 {
  flex: 1;
  margin-left: 10%;
}
</style>
