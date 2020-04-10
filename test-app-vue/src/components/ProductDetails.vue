<template>
  <div>
    <div class="ProductContainer">
      <div class="PhotoContainer">
        <img class="Photo" :src="product.PhotoName" :alt="product.ItemName" />
      </div>
      <div class="FullInfo">
        <h2>{{product.ItemName}}</h2>
        <p>{{product.Description}}</p>
        <table class="Specifications">
          <thead>
            <tr>
              <th colspan="2">
                <span class="BoldText">Specifications</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span class="BoldText">Dimensions:</span>
              </td>
              <td>{{product.Dimensions}}</td>
            </tr>
            <tr>
              <td>
                <span class="BoldText">Base Price:</span>
              </td>
              <td>${{product.BasePrice}}</td>
            </tr>
            <tr>
              <td>
                <span class="BoldText">Special Price:</span>
              </td>
              <td>{{product.SpecialPrice}}</td>
            </tr>
            <tr>
              <td>
                <span class="BoldText">Order Minimum Quantity:</span>
              </td>
              <td>{{product.OrderMinimumQuantity}}</td>
            </tr>
            <tr>
              <td>
                <span class="BoldText">Container Min Qty:</span>
              </td>
              <td>{{product.ContainerMinQty}}</td>
            </tr>
            <tr>
              <td>
                <span class="BoldText">Order Multiple Quantity:</span>
              </td>
              <td>{{product.OrderMultipleQuantity}}</td>
            </tr>
            <tr>
              <td>
                <span class="BoldText">On Hand Quantity:</span>
              </td>
              <td>{{product.OnHandQuantity}}</td>
            </tr>
            <tr>
              <td>
                <span class="BoldText">Created On:</span>
              </td>
              <td>{{getDate(product.CreatedOn)}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: ["product"],
  methods: {
    getDate: strDate => {
      let createOn = "";
      if (strDate) {
        createOn = new Date(
          parseInt(strDate.replace(/.*\(|\).*/g, ""), 10)
        ).toLocaleDateString("en-US");
      }

      return createOn;
    }
  }
};
</script>

<style>
@import url("../assets/styles/Common.css");
@import url("../assets/styles/ProductDetails.css");
</style>