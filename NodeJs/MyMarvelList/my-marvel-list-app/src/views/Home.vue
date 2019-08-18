<template>
  <div class="home">
    <Title text="My Marvel List" />
    <Nav />
    <div class="carousel-container">
      <div class="carousel-containers-row">
        <Carousel category="characters" limit="3" />
      </div>
      <div class="carousel-containers-row">
        <Carousel category="comics" limit="3" />
      </div>
      <div class="carousel-containers-row">
        <Carousel category="series" limit="3" />
      </div>
    </div>
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
.carousel-container {
  margin-left: 10%;
  display: flex;
  flex-flow: column;
  max-height: 100%;
  align-items: center;
}
.carousel-containers-column {
  display: flex;
  flex-flow: column;
}
.carousel-containers-row {
  display: flex;
  flex-flow: row;
  max-height: 33.33%;
}

* {
  color: white;
}
</style>