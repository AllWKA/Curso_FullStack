<template>
  <div class="lastest"></div>
</template>
<style>
.lastest {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
<script>
import axios from "axios";
import marvelConfig from "../marvelConfig";
export default {
  name: "Lastest",
  props: {
    category: String
  },
  data() {
    return {
      contents: []
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
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
};
</script>