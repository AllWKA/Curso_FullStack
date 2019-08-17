<template>
  <b-nav tabs fill>
    <b-nav-item>Comics</b-nav-item>
    <b-nav-item>Movies</b-nav-item>
    <b-nav-item>Series</b-nav-item>
    <b-nav-item>Character</b-nav-item>
    <b-nav-item>Events</b-nav-item>
    <b-nav-item>Login</b-nav-item>
  </b-nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
b-nav {
  background-color: red;
}
</style>
