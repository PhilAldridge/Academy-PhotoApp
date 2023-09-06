<template>
  <div class="tile-wrapper clickable">
    <div class="tile-content">
      <img @click="showImage" class="thumbnail" :src=imgsrc />
      <div v-show="isImageVisible" class="fullscreen-image">
        <span class="close-btn" @click="hideImage">&times;</span>
        <img @click="hideImage" class="thumbnail" :src=imgsrc />
      </div>
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
  data() {
    return {
      isImageVisible: false,
      imageUrl: this.imgsrc
    }
  },
  methods: {
    showImage() {
      this.isImageVisible = true;
      document.body.style.overflow ="hidden";
  
    },
    hideImage() {
      this.isImageVisible = false;
      document.body.style.overflow ="auto";

    }
  }
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
  background-color: rgb(111, 111, 111);
  border-color: var(--bjss-house-color);
}

.tile-content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
}

.tile-title {
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
}

.fullscreen-image {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
</style>
