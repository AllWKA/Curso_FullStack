<template>
  <div>
    <div>
      <form>
        <input type="text" v-model="newFruit.name" />
        <input type="text" v-model="newFruit.price" />
        <input type="text" v-model="newFruit.quantity" />
      </form>
    </div>
    <div>
      <p>{{newFruit}}</p>
      <p>{{addFruit}}</p>
    </div>
  </div>
</template>

<script>
import { log } from "util";
export default {
  name: "HelloWorld",
  data() {
    return {
      newFruit: {
        name: "",
        price: "",
        quantity: ""
      },
      fruits: []
    };
  },
  computed: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
