<template>
  <div class="home">
    <NavBar />
  </div>
</template>

<script>
import NavButtom from "../components/NavButtom.vue";
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavButtom,
    NavBar
  },
  name: "Home"
};
</script>
<style scoped>
.home {
  width: 100px;
  height: 100vh;
}
</style>