<template>
  <div class="home">
    <div class="nav-home">
      <Title text="My Marvel List" />
      <NavBar />
    </div>
    <div class="content-home">
      <Top category="comics" :cycle="cycle" />
      <div class="news">
        <Lastest category="comics" />
        <Lastest category="comics" />
      </div>
      <Top category="characters" :cycle="cycle" />
    </div>
  </div>
</template>

<script>
import NavButtom from "../components/NavButtom.vue";
import NavBar from "../components/NavBar.vue";
import Title from "../components/Title.vue";
import Banner from "../components/Banner.vue";
import Top from "../components/Top.vue";
import Lastest from "../components/Lastest.vue";
export default {
  components: {
    NavButtom,
    NavBar,
    Title,
    Lastest,
    Banner,
    Top
  },
  name: "Home",
  data() {
    return {
      cycle: true,
      interval: 500
    };
  }
};
</script>
<style scoped>
.nav-home {
  margin-bottom: 1%;
}
.news {
  flex-basis: 50%;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
.content-home {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
.home {
  display: flex;
  flex-flow: column;
}
</style>