<template>
    <div class="tile-wrapper clickable">
      <div class="tile-content">
        <div class="tile-title">{{ title }}</div>
        <div class="tiles">
            <ContentTile
                v-for="contentTile in contentTiles"
                :key="tile.title + '-tile'"
                :title="tile.title"
                :text="tile.text"
                class="tile"
            />
    </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "GalleryPreview",
    props: {
      title: {
        type: String,
        default: "Default Title",
      },
      contentTiles: {
        type: array,
        default: [{
                    title: "A tile",
                    text: "This is a reusable component.",
                }],
      },
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
  