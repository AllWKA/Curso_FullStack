<template>
  <div class="comic">
    <v-card>
      <div>
        <img :src="url" />
      </div>
      <v-card-text>
        <div class="title-item-info">
          <h3>{{title}}</h3>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Comic",
  props: {
    url: String,
    title: String
  },
  data() {
    return {};
  },
  created() {}
};
</script>