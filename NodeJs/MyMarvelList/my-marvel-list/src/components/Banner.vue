<template>
  <div class="banner">
    <Carousel interval="7000" />
    <div class="title-position">
      <Title text="My Marvel List" />
    </div>
  </div>
</template>

<script>
import Title from "./Title";
import Carousel from "./Carousel";
export default {
  name: "Banner",
  components: {
    Title,
    Carousel
  }
};
</script>
<style>
.title-position {
  display: flex;
  flex-flow: column;
  justify-content: center;
  position: absolute;
  bottom: 83%;
  /* right: 2%; */
  width: 100%;
  height: 100%;
  height: 5%;
  background-color: rgba(0, 0, 0, 0.459);
}

.banner {
  /* position: relative; */
}
</style>