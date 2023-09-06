<template>
  <div class="tile-wrapper clickable">
    <div class="tile-content">
      <img :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentTile",
  props: {
    image: {
      type: String,
    }
  },
};
</script>

<style scoped>
.tile-wrapper {
  width: 220px;
  height: 240px;
  border: 1.5px solid dimgrey;
  border-radius: 25px;
  transition: 0.3s;
}

.tile-wrapper:hover {
  background-color: whitesmoke;
  border-color: var(--bjss-house-color);
}

.tile-content {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.tile-title {
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
}
</style>
