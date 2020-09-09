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
  name: 'ContentTile',
  props: {
    title: {
      type: String,
      default: 'Default Title',
    },
    text: {
      type: String,
      default: 'Default Text',
    },
  },
}
</script>

<style scoped lang="scss">
.tile-wrapper {
  width: 220px;
  height: 240px;
  border: 1.5px solid dimgrey;
  border-radius: 25px;
  transition: 0.3s;
}

.tile-wrapper:hover {
  background-color: whitesmoke;
  border-color: $bjss-house-colour;
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
