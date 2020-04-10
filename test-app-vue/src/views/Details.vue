<template>
  <div>
    <ProductDetails v-bind:product="findProduct()" />
  </div>
</template>

<script>
import store from "../apis/test.json";
import ProductDetails from "../components/ProductDetails";

export default {
  name: "Details",
  components: {
    ProductDetails
  },
  data() {
    return {
      items: store.items
    };
  },
  methods: {
    findProduct: function() {
      const routerID = parseInt(this.$route.params.id, 10);
      return this.items.find(i => i.ProductID === routerID);
    }
  }
};
</script>

<style>
</style>