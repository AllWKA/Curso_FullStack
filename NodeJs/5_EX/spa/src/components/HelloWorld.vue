<template>
  <div>
    <div>
      <h1>ToCall List</h1>
    </div>
    <div>
      <form id="newContact" v-on:submit.prevent="addContact">
        <label>name</label>
        <input type="text" v-model="newContact.name" placeholder="Set name contact..." />
        <label>email</label>
        <input type="text" v-model="newContact.email" placeholder="Set email contact..." />
      </form>
    </div>
    <div>
      <ul id="contactList"></ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      contats: [],
      newContact: {
        name: "",
        email: ""
      }
    };
  },
  methods: {
    addContact(name) {
      console.log("asd");
      console.log(this.newContact);
    },
    emailIsUnique(email) {
      return this.contats.map(contact => contact.email == email).length == 0;
    }
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
