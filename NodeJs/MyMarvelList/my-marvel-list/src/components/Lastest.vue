<template>
  <div class="lastest">
    <div class="comic-item" v-for="(content,i) in contents" :key="i">
      <Comic
        v-if="category==='characters'"
        :title="content.name"
        :url="content.thumbnail.path+'.'+content.thumbnail.extension"
      />
    </div>
    <div class="pages">
      <v-pagination :length="length" :total-visible="Number.parseInt(contents.length/3)"></v-pagination>
    </div>
  </div>
</template>
<style>
.lastest {
  display: flex;
  border: 1px solid red;
  flex-wrap: wrap;
}
.comic-item {
  width: calc(100% / 3);
}
.pages {
  width: 100%;
}
</style>
<script>
import axios from "axios";
import marvelConfig from "../marvelConfig";
import Comic from "./Comic.vue";
export default {
  name: "Lastest",
  components: {
    Comic
  },
  props: {
    category: String,
    contentPerPage: Number
  },
  data() {
    return {
      contents: [],
      length: 0
    };
  },
  created() {
    axios
      .get(marvelConfig.baseURL + this.category + marvelConfig.fastConfig)
      //Use arrow to use the correct 'THIS'
      .then(response => {
        // handle success
        console.log(response.data.data.results);

        this.contents = response.data.data.results;
        this.length = Number.parseInt(
          this.contents.length / this.contentPerPage
        );
        console.log(this.length);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
};
</script>