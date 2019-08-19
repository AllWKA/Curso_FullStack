<template>
  <div>
    <Title text="My Marvel List" />
    <Nav />
    <div class="row">
      <div>
        <img class="profile-img" :src="content.thumbnail.path+'.'+content.thumbnail.extension" />
        <h2>{{content.name}}</h2>
      </div>
      <div class="column">
        <h2>Description:</h2>
        <p>{{content.description}}</p>
        <h3>Comics:</h3>
        <div class="row wrap commics-section">
          <div class="commic-section" v-for="(commic,i) in content.comics.items" :key="i">
            <img class="commic-img" :src="imgs[i]" />
            <h3>{{commic.name}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import configApi from "../keys";
import ContentList from "../components/ContentList.vue";
import Title from "@/components/Title.vue";
import Nav from "@/components/Nav.vue";
export default {
  data() {
    return {
      content: {},
      imgs: []
    };
  },
  components: {
    ContentList,
    Title,
    Nav
  },
  methods: {
    getImg(url) {
      axios
        .get(url + configApi.fastVariable)
        .then(response => {
          // handle success
          //content.thumbnail.path+'.'+content.thumbnail.extension
          return this.imgs.push(
            response.data.data.results[0].thumbnail.path +
              "." +
              response.data.data.results[0].thumbnail.extension
          );
        })
        .catch(function(error) {
          // handle error
          console.log("Error::::\n" + error);
        });
    }
  },
  created() {
    axios
      .get(
        configApi.url +
          this.$route.params.category +
          "/" +
          this.$route.params.id +
          configApi.fastVariable
      )
      .then(response => {
        // handle success
        this.content = response.data.data.results[0];
        this.content.comics.items.forEach(commic => {
          this.getImg(commic.resourceURI);
        });
      })
      .catch(function(error) {
        // handle error
        console.log("Error::::\n" + error);
      });
  }
};
</script>
<style >
.commic-section {
  background-color: rgba(255, 0, 0, 0.13);
  border: 2px yellow solid;
  max-width: 70%;
  max-height: 100%;
}
.commics-section {
  max-height: 300px;
  max-width: 1000px;
  overflow: scroll;
  border: 2px white solid;
}
.wrap {
  flex-wrap: wrap;
}
* {
  color: white;
}
.profile-img {
  max-width: 90%;
  max-height: 90%;
}
.commic-img {
  width: 100%;
  height: 100%;
}
.row {
  display: flex;
  justify-content: space-around;
  /* flex-wrap: wrap; */
}
.column {
  display: flex;
  flex-flow: column;
}
</style>