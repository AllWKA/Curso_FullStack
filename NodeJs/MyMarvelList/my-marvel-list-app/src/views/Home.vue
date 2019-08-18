<template>
  <div class="home">
    <Title text="My Marvel List" />
    <Nav />
    <Carousel category="characters" />
    <Carousel category="comics" />
    <Carousel category="series" />
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import Nav from "@/components/Nav.vue";
import Carousel from "@/components/Carousel.vue";
export default {
  name: "Home",
  components: {
    Title,
    Nav,
    Carousel
  }
};
</script>
<style  scoped>
* {
  color: white;
}
</style>