<template>
  <div class="nav-bar">
    <NavButtom text="Comics" />
    <NavButtom text="Characters" />
    <NavButtom text="Creators" />
    <NavButtom text="FanZone" />
    <NavButtom text="Shop" />
    <NavButtom text="Login" />
  </div>
</template>

<script>
import NavButtom from "./NavButtom.vue";
export default {
  components: {
    NavButtom
  },
  name: "NavBar"
};
</script>
<style scoped>
.nav-bar {
  padding-left: 2%;
  padding-right: 3%;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>