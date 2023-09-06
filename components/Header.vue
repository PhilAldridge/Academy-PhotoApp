<template>
  <div>
    <div class="header-container">
      <!-- <h2 class="header-title">{{ title }}</h2> -->
      <div class="nav-home">
        <nuxt-link to="/">Sam and Joe's Wedding</nuxt-link>
      </div>
      <div class="nav-add-photo">
        <nuxt-link to="/addPhoto">+</nuxt-link>
      </div>
      
    </div>
    <!-- <hr class="header-divider" /> -->
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
  padding: 40px;
} 

 .nav-add-photo {
  font-size: 40px;
  position: absolute;
  left: 20px;
  top: 6px;
  
} 

.nav-home {
  
  font-size: 25px;
  position: absolute;
  height: 100px;
  right: 20px;
  top: 10px;
  
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
</style>
