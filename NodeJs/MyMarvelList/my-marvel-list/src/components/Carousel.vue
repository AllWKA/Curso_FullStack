<template>
  <div>
    <v-carousel
      :interval="interval"
      cycle="true"
      :dark="dark"
      :show-arrows="showArrows"
      :hide-delimiters="hideDelimiters"
    >
      <v-carousel-item v-for="(img,i) in imgs" :key="i">
        <img :src="img" />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    cycle: Boolean,
    interval: Number
  },
  data() {
    return {
      showArrows: false,
      hideDelimiters: true
    };
  }
};
</script>
<style>
img {
  height: 100%;
  width: 100%;
}
</style>