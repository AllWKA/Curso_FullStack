<template>
  <div class="home">
    <div class="nav-home">
      <Title text="My Marvel List" />
      <NavBar />
    </div>
    <div class="content-home">
      <Top category="comics" />
      <div style="width:50%;"></div>
      <Top category="characters" />
    </div>
  </div>
</template>

<script>
import NavButtom from "../components/NavButtom.vue";
import NavBar from "../components/NavBar.vue";
import Title from "../components/Title.vue";
import Carousel from "../components/Carousel.vue";
import Banner from "../components/Banner.vue";
import Top from "../components/Top.vue";
export default {
  components: {
    NavButtom,
    NavBar,
    Title,
    Carousel,
    Banner,
    Top
  },
  name: "Home"
};
</script>
<style scoped>
.nav-home {
  /* display: flex; */
  /* flex-flow: column; */
  margin-bottom: 20%;
}
.content-home {
  display: flex;
  flex-flow: row;
}
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
}
</style>