<template>
  <div class="file-upload">
    <div class="file-upload__area">
      <input type="file" name="" id="" accept="image/png/*" @change="uploadImage" />
    </div>
  </div>
</template>
 
<script>
  export default {
    methods: {

      uploadImage() {
        let rawImg;
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
          rawImg = reader.result;
          console.log(rawImg);
        }
        reader.readAsDataURL(file);
        console.log('%cImage Upload Success!', 'background: #27e887; color: #ffffff');
  },
  mounted() {
    window.uploadImage = () => {
      console.log('Image Upload Success!')
    }
  },

  beforeDestroy() {
    delete window.uploadImage;

  }
  
  }
}
  
</script>


<!-- function uploadImage() {
  let rawImg;
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    rawImg = reader.result;
    console.log(rawImg);
  }
  reader.readAsDataURL(file);
  console.log('%cImage Upload Success!', 'background: #27e887; color: #ffffff'); -->


<style scoped>
.file-upload {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.file-upload .file-upload__area {
  width: 600px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  margin-top: 40px;
}
</style>