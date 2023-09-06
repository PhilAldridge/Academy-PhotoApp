<template>
  <div>
    <div class="header-container">
      <h2 class="header-title">{{ "Sam and Joe's Wedding"}}</h2> 
      <div class="nav-home">
        <nuxt-link to="/">Save the Date</nuxt-link>
      </div>
      <div class="nav-add-photo">
        <nuxt-link to="/addPhoto">+</nuxt-link>
      </div>
      
    </div>
    <div class="header-divider">
      
    </div>
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
.page-title {
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
  margin-top: 10px;
  border-bottom: 2px solid #4c956c;
  margin: -50px auto 10px; 
}

.header-title {
  font-size: 20px;
  position: absolute;
  height: 100px;
  right: 20px;
  top: 20px;
}
</style>


