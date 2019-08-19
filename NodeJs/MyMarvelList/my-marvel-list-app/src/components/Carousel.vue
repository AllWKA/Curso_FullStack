<template>
  <div>
    <div>
      <h2>Top {{category}}</h2>
    </div>
    <div class="carousel-container-final">
      <a @click="previous">Previous</a>
      <div v-for="(content,i) in contents" :key="i" @click="changePage(content.id)">
        <div>
          <router-link :to="'/content/'+category+'/'+content.id">
            <img :src="content.thumbnail.path+'.'+content.thumbnail.extension" />
            <h2>Top {{i+offset}}</h2>
            <p>{{content.title}}</p>
            <p>{{content.name}}</p>
          </router-link>
        </div>
      </div>
      <a @click="next">Next</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import configApi from "../keys";
export default {
  methods: {
    changePage(id) {
      // router.push({});
    },
    previous() {
      this.getContents(this.offset--);
    },
    next() {
      this.getContents(this.offset++);
    },
    getContents() {
      axios
        .get(
          configApi.url +
            this.category +
            configApi.fastVariable +
            "&limit=" +
            this.limit +
            "&offset=" +
            this.offset
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
  },
  name: "Carousel",
  props: {
    category: String,
    limit: String
  },
  data() {
    return {
      contents: [],
      offset: 1
    };
  },
  created() {
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
  background-color: rgba(255, 0, 0, 0.507);
  padding-top: 25px;
  display: flex;
  flex-flow: row;
  margin: 2%;
  justify-content: center;
  align-items: center;
}
.carousel-container-final * {
  flex: 1;
  /* flex-basis: 30%; */
}
* {
  text-align: center;
}
img {
  max-width: 90%;
}
</style>