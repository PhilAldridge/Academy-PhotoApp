<template>
  <div class="tile-wrapper clickable">
    <div class="tile-content">
      <div class="tile-title">{{ title }}</div>
      <div class="tile-text">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentTile",
  props: {
    title: {
      type: String,
      default: "Default Title",
    },
    text: {
      type: String,
      default: "Default Text",
    },
  },
};
</script>

<style scoped>
.tile-wrapper {
  width: 220px;
  height: 240px;
  border: 3px solid dimgrey;
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
  font-family: arial;
}

.tile:hover {
  color: black;
}

.tile-title {
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  font-family: arial;
}
</style>
