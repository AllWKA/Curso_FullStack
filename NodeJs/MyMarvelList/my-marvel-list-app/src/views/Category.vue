<template >
  <div>
    <Title text="My Marvel List" />
    <Nav />
    <h2>{{$route.params.category}}</h2>
    <div class="content">
      <div class="commic-content" v-for="(content,i) in contents" :key="i">
        <img :src="content.thumbnail.path+'.'+content.thumbnail.extension" />
        <router-link :to="'/content/'+$route.params.category+'/'+content.id">
          <div class="sub-title">
            <h3 v-show="content.name">{{content.name}}</h3>
            <h3 v-show="content.title">{{content.title}}</h3>
          </div>
        </router-link>
      </div>
    </div>
    <div class="pages">
      <button @click="previous">Previous</button>
      <button @click="next">Next</button>
    </div>
  </div>
</template>

<style >
button {
  background-color: red;
  flex: 1;
  font-size: 190%;
}
.pages {
  display: flex;
  justify-content: space-between;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2%;
}
.commic-content {
  flex: 1;
  flex-basis: calc(100% / 5);
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-left: 5%;
}
.commic-content * {
  flex: 1;
}
img {
  width: 70%;
  height: 70%;
  flex-basis: 80%;
}
.sub-title {
  display: flex;
  align-items: center;
  justify-content: center;
}
h3 {
  text-align: left;
  color: white;
  word-break: inherit;
}
h2 {
  text-align: center;
}
</style>

<script>
import axios from "axios";
import configApi from "../keys";
import Title from "@/components/Title.vue";
import Nav from "@/components/Nav.vue";
export default {
  watch: {
    $route() {
      this.changePage();
    }
  },
  methods: {
    changePage() {
      axios
        .get(
          configApi.url +
            this.$route.params.category +
            configApi.fastVariable +
            "&limit=" +
            this.$route.params.limit +
            "&offset=" +
            this.$route.params.offset
        )
        .then(response => {
          // handle success
          this.contents = response.data.data.results;
        })
        .catch(function(error) {
          // handle error
          console.log("Error::::\n" + error);
        });
    },
    previous() {
      this.getContents(this.page--);
    },
    next() {
      this.getContents(this.page++);
    },
    getContents() {
      axios
        .get(
          configApi.url +
            this.$route.params.category +
            configApi.fastVariable +
            "&limit=" +
            this.$route.params.limit +
            "&offset=" +
            this.$route.params.offset * this.page
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
  components: {
    Title,
    Nav
  },
  props: {
    category: String
  },
  data() {
    return {
      contents: [],
      pages: [],
      page: 1
    };
  },
  created() {
    axios
      .get(
        configApi.url +
          this.$route.params.category +
          configApi.fastVariable +
          "&limit=" +
          this.$route.params.limit +
          "&offset=" +
          this.$route.params.offset
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