<template>
  <div class="top">
    <v-card :height="height">
      <h2>Top {{category}}</h2>
      <v-carousel
        :interval="interval"
        :cycle="cycle"
        :show-arrows="showArrows"
        :hide-delimiters="hideDelimiters"
        :vertical="vertical"
      >
        <v-carousel-item v-for="(content,i) in contents" :key="i">
          <v-card>
            <div>
              <img :src="content.thumbnail.path+'.'+content.thumbnail.extension" />
            </div>
            <v-card-text>
              <div class="item-rank">
                <h3>#{{i+1}}</h3>
              </div>
              <div class="title-item-info">
                <h3>
                  {{content.title}}
                  {{content.name}}
                </h3>
              </div>
            </v-card-text>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>


<script>
import axios from "axios";
import marvelConfig from "../marvelConfig";
export default {
  name: "Top",
  props: {
    category: String,
    cycle: Boolean,
    interval: Number
  },
  data() {
    return {
      contents: [],
      showArrows: false,
      hideDelimiters: true,
      vertical: true,
      height: 20
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

<style>
img {
  /* height: 90%; */
  margin-top: 2%;
  width: 70%;
}
.top {
  width: 25%;
}
.item-container * {
  flex: 1;
}
* {
  text-align: center;
}
h2 {
  margin-bottom: 2%;
}
</style>


