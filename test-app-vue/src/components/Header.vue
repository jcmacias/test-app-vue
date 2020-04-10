<template>
  <div class="NavBar">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img
            src="https://b2bbucket.s3.amazonaws.com/18/logo/repzio-imc_di-logo-wh-color%20(1).png"
            alt="IMC"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
@import url("../assets/styles/Common.css");
@import url("../assets/styles/Header.css");
</style>