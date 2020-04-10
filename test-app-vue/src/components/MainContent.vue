<template>
  <div class="MainContent">
    <div class="container">
      <h2 class="SectionTitle">Products:</h2>
      <div>
        <ul class="List">
          <li
            v-for="item in items"
            :key="item.ProductID"
            class="ListElement"
            @click="goToProduct(item.ProductID)"
          >
            <div class="Product">
              <div class="ThumbnailContainer">
                <div class="ManufacturerLogoContainer">
                  <img
                    class="ManufacturerLogo"
                    :src="getLogo(item.ManufacturerID)"
                    :alt="item.ItemName"
                  />
                </div>
                <img class="Thumbnail" :src="item.PhotoName" :alt="item.ItemName" />
              </div>
              <div class="BasicInfoContainer">
                <h3>{{item.ItemName}}</h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  props: ["items"],
  methods: {
    getLogo: mId =>
      `http://images.repzio.com/productimages/${mId}/logo${mId}_lg.jpg`,
    goToProduct: function(itemID) {
      this.$router.push(`/details/${itemID}`);
    }
  }
};
</script>

<style>
@import url("../assets/styles/Common.css");
@import url("../assets/styles/MainContent.css");
</style>