<template>
  <div>
    <div class="header-container">
      <h2 class="header-title">{{ title }}</h2>
      <div class="nav">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
      </div>
      <div>
        <img src="@/assets/img/BJSSAcademy.png" id="logo" alt="BJSS Logo" style="width:100px;height:60px;">
      </div>
    </div>
    <hr class="header-divider" />
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Default Header Title",
    },
  },
};
</script>

<style scoped>
.header-title {
  margin: 0px;
}

.header-container {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ghostwhite;
}

.nav {
  width: 200px;
  display: flex;
  justify-content: space-evenly;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nuxt-link-exact-active {
  color: var(--bjss-house-color);
  text-decoration: underline;
}

.header-divider {
  border: none;
  width: 100%;
  height: 50px;
  margin-top: 0px;
  border-bottom: 1px solid #1b2e61;
  box-shadow: 0 5px 5px -5px var(--bjss-house-color);
  margin: -50px auto 10px;
}

#logo {
  padding-right: 10px;
  padding-left: 50px;
  margin-left: 60px;

}

</style>
