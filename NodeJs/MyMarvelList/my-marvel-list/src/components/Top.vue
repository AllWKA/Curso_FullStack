<template>
  <div class="top">
    <div class="top-title">
      <Title :text="'Top ' + category" />
    </div>
    <div class="top-list">
      <v-list>
        <v-list-item v-for="(content,i) in contents" :key="i">
          <div class="item-container">
            <div class="item-rank">
              <h3>{{i+1}}#</h3>
            </div>
            <div class="item-img">
              <img :src="content.thumbnail.path+'.'+content.thumbnail.extension" />
            </div>
            <div class="item-info">
              <div class="title-item-info">
                <h3>
                  {{content.title}}
                  {{content.name}}
                </h3>
              </div>
            </div>
          </div>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>


<script>
import Title from "./Title";
import axios from "axios";
import marvelConfig from "../marvelConfig";
export default {
  name: "Top",
  components: {
    Title
  },
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

<style>
.top {
  display: flex;
  flex-flow: column;
  overflow: scroll;
  max-height: 100vh;
}
.top-list {
  background-color: black;
}
.top-title {
  flex: 1;
}
.item-container {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */
}
.item-container * {
  flex: 1;
}
* {
  text-align: center;
}
</style>


