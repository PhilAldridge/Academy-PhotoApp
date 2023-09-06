<template>
  
    <div class="file-upload">
      <div class="file-upload__area">
        <input type="file" name="" id="" @change="uploadFile"/>
        <button @click="submitFile">Upload</button>
      </div>
    </div>
  </template>

<script>
export default {
  methods: {
    uploadFile() {
        this.Images = this.$refs.file.files[0];
        console.log(this.Images)
      },
    submitFile() {
      alert(this.Images)
    }
  },
};
</script>

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