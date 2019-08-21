<template>
  <div class="nav-buttom">
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
h2 {
  border-width: 3px 4px 3px 5px;
  border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
  transform: rotate(2deg);
  border: 2px solid rgb(180, 211, 3);
  background-color: red;
  color: white;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  font-size: 100%;
  font-family: "Comic Sans MS", cursive, sans-serif;
}
h2:hover {
  animation: example 1s both;
}
@keyframes example {
  100% {
    transform: scale(1.05);
    background-color: #ffffff;
    color: #000000;
  }
}
</style>