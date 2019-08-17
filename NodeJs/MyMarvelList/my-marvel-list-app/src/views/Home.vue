<template>
  <div class="home">
    <Title />
    <NavBar />
    <Carousel />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Title from "@/components/Title.vue";
import Carousel from "@/components/Carousel.vue";

export default {
  name: "home",
  components: {
    NavBar,
    Title,
    Carousel
  },
  methods: {}
};
</script>
