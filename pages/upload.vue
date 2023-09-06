<template>
    <div class="file-upload">
      <div class="file-upload__area">
        <input type="file" name="" id="" @change="encodeImageToBase64" />
        <textarea v-if="base64Image" :value="base64Image" rows="10" cols="30"></textarea>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      base64Image: null
    };
  },
  methods: {
    encodeImageToBase64(event) {
      if (event.target.files && event.target.files[0]) {
        let file = event.target.files[0];
        let reader = new FileReader();

        // reader.onload = (e) => {
        //   console.log(e.target.result);
        // };

        reader.onload = function(e) {
      // e.target.result contains the binary string
      let binaryString = e.target.result;
      let base64String = btoa(binaryString);
      //console.log(base64String);

      if (e.target.result === atob(base64String)) {
          console.log("yo")
        }
    };



        reader.readAsDataURL(file);
      }
    }
  }       
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