<template>
  <div class="home">
    <Banner />
  </div>
</template>

<script>
import NavButtom from "../components/NavButtom.vue";
import NavBar from "../components/NavBar.vue";
import Title from "../components/Title.vue";
import Carousel from "../components/Carousel.vue";
import Banner from "../components/Banner.vue";
export default {
  components: {
    NavButtom,
    NavBar,
    Title,
    Carousel,
    Banner
  },
  name: "Home"
};
</script>
<style scoped>
.home {
  /* width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column; */
}
</style>