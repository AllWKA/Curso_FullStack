<template>
  <div class="carousel-container-final">
    <a>Back</a>
    <div v-for="(content,i) in contents" :key="i">
      <img :src="content.thumbnail.path+'.'+content.thumbnail.extension" />
      <h2>Top {{i+1}}</h2>
      <p>{{content.title}}</p>
      <p>{{content.name}}</p>
    </div>
    <a>Continue</a>
  </div>
</template>

<script>
import axios from "axios";
import configApi from "../keys";
export default {
  name: "Carousel",
  props: {
    category: String,
    limit: String
  },
  data() {
    return {
      contents: []
    };
  },
  created() {
    console.log(
      configApi.url +
        this.category +
        configApi.fastVariable +
        "&limit=" +
        this.limit
    );

    axios
      .get(
        configApi.url +
          this.category +
          configApi.fastVariable +
          "&limit=" +
          this.limit
      )
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
.carousel-container-final {
  display: flex;
  flex-flow: row;
  margin: 2.5%;
  justify-content: center;
  align-items: center;
}
.carousel-container-final * {
  flex: 5;
  flex-basis: 30%;
}
img {
  max-width: 50%;
}
</style>