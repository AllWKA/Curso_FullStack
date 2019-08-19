<template>
  <div class="content-list">
    <h2>{{type}}</h2>
    <!-- <div v-for="(data,i) in datas" :key="i">
      <p>{{getContent(data.resourceURI)}}</p>
    </div>-->
  </div>
</template>
<script>
export default {
  props: {
    type: String
  },
  data() {
    return {
      dataGet: {}
    };
  },
  created() {},
  methods: {}
};
</script>