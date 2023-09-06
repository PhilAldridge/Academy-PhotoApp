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
  border: 1.5px solid dimgrey;
  border-radius: 25px;
  transition: 0.3s;
  vertical-align: center;
  height: fit-content;
  width:fit-content;
  max-width: 30%;
  flex-grow: 1;
}

.tile-wrapper:last-child {
  flex-grow: 10;
}
.tile-wrapper:hover {
  background-color: whitesmoke;
  border-color: var(--bjss-house-color);
}

.tile-content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: fit-content;
}

.tile-title {
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
}

img{  
  max-height: 100%;
  width: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: middle;
}
</style>
