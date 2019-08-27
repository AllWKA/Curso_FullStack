<template>
  <div class="lastest">
    <v-card
      class="mx-auto"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :elevation="elevation"
      :raised="raised"
    >
      <v-img
        v-if="media"
        class="white--text"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title class="align-end fill-height">I'm a title</v-card-title>
      </v-img>
      <v-card-title v-else>I'm a title</v-card-title>

      <v-card-text>I'm card text</v-card-text>
      <v-card-actions v-if="actions">
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn text>Click</v-btn>
        <v-btn outlined>Click</v-btn>
      </v-card-actions>
    </v-card>
    <v-card
      class="mx-auto"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :elevation="elevation"
      :raised="raised"
    >
      <v-img
        v-if="media"
        class="white--text"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title class="align-end fill-height">I'm a title</v-card-title>
      </v-img>
      <v-card-title v-else>I'm a title</v-card-title>

      <v-card-text>I'm card text</v-card-text>
      <v-card-actions v-if="actions">
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn text>Click</v-btn>
        <v-btn outlined>Click</v-btn>
      </v-card-actions>
    </v-card>
    <v-card
      class="mx-auto"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :elevation="elevation"
      :raised="raised"
    >
      <v-img
        v-if="media"
        class="white--text"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title class="align-end fill-height">I'm a title</v-card-title>
      </v-img>
      <v-card-title v-else>I'm a title</v-card-title>

      <v-card-text>I'm card text</v-card-text>
      <v-card-actions v-if="actions">
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn text>Click</v-btn>
        <v-btn outlined>Click</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<style>
.lastest {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
<script>
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