<template>
  <div class="tile-wrapper clickable">
    <div class="tile-content">

      <img class="thumbnail" :src=imgsrc />
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
    imgsrc: {
      type: String,
      default: "https://metro-orthodontics.co.uk/wp-content/uploads/2016/09/wedding-header-image.jpg"
    }
  },
};
</script>

<style scoped>
.tile-wrapper {
  min-width: 220px;
  max-width: 400px;
  min-height: 240px;
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
