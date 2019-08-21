<template>
  <div class="nav-button">
    <button>
      <h2>{{text}}</h2>
    </button>
  </div>
</template>

<script>
export default {
  name: "NavButtom",
  props: {
    text: String,
    type: String
  },
  data() {
    return {};
  }
};
</script>

<style >
.nav-button {
  flex: 1;
}
button {
  width: 100%;
  height: 100%;
}
h2 {
  border-width: 3px 4px 3px 5px;
  border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
  border: 5px double rgb(180, 211, 3);
  background-color: red;
  color: white;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  font-size: 130%;
  font-family: "Comic Sans MS", cursive, sans-serif;
}
button:hover {
  animation: example 0.2s both;
}
@keyframes example {
  100% {
    transform: scale(1.3);
  }
}
</style>