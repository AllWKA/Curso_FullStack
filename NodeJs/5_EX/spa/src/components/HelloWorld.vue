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
        <button>create</button>
      </form>
    </div>
    <div>
      <ul id="contactList">
        <li v-for="(contact,i) in contacts" :key="i">
          <div class="item">
            <div>O</div>
            <div>{{contact.name}}</div>
            <div>{{contact.email}}</div>
            <div>X</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      contacts: [
        {
          name: "z",
          email: "x"
        }
      ],
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
li div {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>
