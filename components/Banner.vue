<template>
  <div class="banner">
    <img :src="image" />
    <div class="text-overlay">
      <h2 v-if="title">{{ title }}</h2>
      <h4 v-if="message">{{ message }}</h4>
    </div>
  </div>
</template>

<script>
import academyImage from "@/assets/img/academy.png";

export default {
  name: "Banner",
  data() {
    return {
      image: academyImage,
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  text-align: center;
  color: white;
  height: 235px;
  overflow: hidden;
}

img {
  max-width: 100%;
  filter: blur(4px);
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: pre-wrap;
}
</style>
