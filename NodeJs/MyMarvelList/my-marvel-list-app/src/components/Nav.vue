<template>
  <div class="nav-bar">
    <router-link :to="'/category/comics/10/10'">
      <h2>Comics</h2>
    </router-link>
    <router-link :to="'/category/characters/10/10'">
      <h2>Characters</h2>
    </router-link>
    <router-link :to="'/category/series/10/10'">
      <h2>Series</h2>
    </router-link>
    <router-link :to="'/category/events/10/10'">
      <h2>Events</h2>
    </router-link>
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
.nav-bar * {
  flex: 1;
  margin-left: 10%;
}
</style>
