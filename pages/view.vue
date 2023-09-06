<template>
<div v-for="image in images">
  <img :src="image" alt="dolphin" style="width:300px;">
</div>

</template>

<script setup>
const images = ["dolphin.jpg", "lion.webp", "Monkey.webp", "elephant.jpg"]

</script>