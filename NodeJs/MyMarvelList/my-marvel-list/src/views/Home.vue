<template>
  <div class="home">
    <div class="nav-home">
      <Title text="My Marvel List" />
      <NavBar />
    </div>
    <div class="content-home">
      <Top category="comics" :cycle="cycle" />
      <div style="width:50%;"></div>
      <Top category="characters" :cycle="cycle" />
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
  name: "Home",
  data() {
    return {
      cycle: true,
      interval: 500
    };
  }
};
</script>
<style scoped>
.nav-home {
  margin-bottom: 1%;
}
.content-home {
  display: flex;
  flex-flow: row;
}
.home {
  display: flex;
  flex-flow: column;
}
</style>