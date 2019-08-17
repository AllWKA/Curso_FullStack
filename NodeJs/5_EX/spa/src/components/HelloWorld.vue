<template>
  <div>
    <div>
      <h1>ToCall List</h1>
    </div>
    <div @keyup.enter="keyUP" style="background-color:red">
      <form id="newContact" v-on:submit.prevent="addContact">
        <label>name</label>
        <input type="text" v-model="newContact.name" placeholder="Set name contact..." />
        <label>email</label>
        <input type="text" v-model="newContact.email" placeholder="Set email contact..." />
        <button>create</button>
      </form>

      <button @click="hideDone()">Hide Done</button>
    </div>
    <div>
      <ul id="contactList">
        <li
          v-for="(contact,i) in contacts"
          :key="i"
          :id="contact.email"
          :class="[(hide && contact.state) ? 'done' :'no-done']"
          v-show="((!hide&&!contact.status)||(hide&&!contact.status))"
        >
          <h2>
            Name:
            {{contact.name}}
          </h2>
          <h2>
            Email:
            {{contact.email}}
          </h2>
          <h2>
            state:
            {{contact.state}}
          </h2>
          <button @click="changeStateContact(contact.email,$event)">DONE</button>
          <button @click="removeContact(contact.email)">DELETE</button>
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
          name: "asd",
          email: "asd",
          state: false
        }
      ],
      newContact: {
        name: "",
        email: "",
        state: false
      },
      hide: false
    };
  },
  methods: {
    keyUP() {
      console.log("keyUp");
    },
    addContact() {
      if (!this.emailIsUnique()) {
        this.contacts.push(this.newContact);
      } else {
        alert("Correo ya registrado");
      }
    },
    emailIsUnique() {
      return this.contacts
        .map(contact => contact.email == this.newContact.email)
        .includes(true);
    },
    removeContact(email) {
      this.contacts = this.contacts.filter(contact => contact.email != email);
    },
    changeStateContact(email, button) {
      var contact = this.contacts.find(contact => contact.email == email);
      contact.state = !contact.state;
      contact.state
        ? (button.srcElement.innerHTML = "UnDone")
        : (button.srcElement.innerHTML = "Done");
    },
    hideDone() {
      this.hide = !this.hide;
      console.log(this.hide);
    }
  }
};
</script>

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
.hide {
  background-color: rgba(255, 0, 0, 0.356);
}
.show {
  background-color: rgba(38, 0, 255, 0.356);
}
a {
  color: #42b983;
}
</style>
