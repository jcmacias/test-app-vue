<template>
  <div>
    <Hero />
    <MainContent v-bind:items="items" />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import MainContent from "../components/MainContent";
import store from "../apis/test.json";

export default {
  name: "Home",
  components: {
    Hero,
    MainContent
  },
  data() {
    return {
      items: store.items
    };
  }
};
</script>

<style>
</style>