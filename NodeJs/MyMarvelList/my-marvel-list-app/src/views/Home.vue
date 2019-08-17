<template>
  <div class="fullscreen">
    <Title text="My Marvel List" />
    <NavBar />
    <v-row>
      <v-col>
        <Carousel category="characters" />
      </v-col>
      <v-col>
        <Carousel category="comics" />
      </v-col>
      <v-col>
        <Carousel category="series" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Carousel from "../components/Carousel.vue";
import Title from "../components/Title.vue";
export default {
  components: {
    Carousel,
    NavBar,
    Title
  }
};
</script>
<style scoped>
.fullscreen {
  height: 100vh;
  background-color: red;
}
</style>
