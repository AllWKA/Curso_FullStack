<template>
  <div class="carousel-container">
    <img
      v-for="(content,i) in contents"
      :key="i"
      :src="content.thumbnail.path+'.'+content.thumbnail.extension"
    />
  </div>
</template>

<script>
import axios from "axios";
import configApi from "../keys";
export default {
  name: "Carousel",
  props: {
    category: String
  },
  data() {
    return {
      contents: []
    };
  },
  created() {
    console.log(configApi.url + this.category + configApi.fastVariable);

    axios
      .get(configApi.url + this.category + configApi.fastVariable)
      .then(response => {
        // handle success
        this.contents = response.data.data.results;
      })
      .catch(function(error) {
        // handle error
        console.log("Error::::\n" + error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-container {
  display: flex;
}
</style>