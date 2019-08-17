<template>
  <div>
    <Title :text="'Top ' + category" />
    <!-- <v-card > -->
    <v-carousel cycle="true" dark="true" hide-delimiters="true" vertical="true" interval="5000">
      <v-carousel-item v-for="(content, i) in contents" :key="i">
        <v-row justify="center">
          <img :src="content.thumbnail.path+'.'+content.thumbnail.extension" />
        </v-row>
        <v-row justify="center">
          <h4>#{{i+1}} {{content.name}}</h4>
          <h4>{{content.title}}</h4>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <!-- </v-card> -->
  </div>
</template>

<script>
import Title from "./Title";
import axios from "axios";
import configApi from "../keys";
export default {
  name: "Carousel",
  props: {
    category: String
  },
  components: {
    Title
  },
  data() {
    return {
      document: "#carousel",
      contents: [],
      slideIndex: 0,
      title: "Nothing"
    };
  },
  methods: {},
  created() {
    axios
      .get(configApi.url + this.category + configApi.fastVariable)
      .then(response => {
        // handle success
        this.contents = response.data.data.results;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 50%;
  width: 50%;
}
h4 {
  color: white;
  text-align: center;
}
</style>
