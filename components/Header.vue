<template>
  <div>
    <div class="header-container">
      <h2 class="header-title">{{ title }}</h2>
      <div class="nav">
        <nuxt-link to="/upload"> Upload</nuxt-link>
        <nuxt-link to="/view"> Gallery</nuxt-link>
        <nuxt-link to="/"> Account </nuxt-link>
        <nuxt-link to="/about">Download Our App</nuxt-link>
        
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
  color: #06358B;
  font-family: britannic;
}

.nav {
  width: 200px;
  display: flex;
  justify-content: space-evenly;
}

a {
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
  border-bottom: none;
  margin: -50px auto 10px;
}

.header-container a {
  padding: 0 10%;
  color: #1D0303;
  font-family: arial;
}

.header-container a:hover {
  color: grey;
}

.header-container a:active{
  color: black;
}

</style>
