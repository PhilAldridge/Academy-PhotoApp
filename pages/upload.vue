<template>
    <div class="file-upload">
      <div class="file-upload__area">
        <input type="file" name="" id="" />
      </div>
    </div>
    <div class="send-file">
        <button class="button" type="button">Upload</button> 
      </div>
  </template>
   
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
  .button {
    height: 20px;
    width: 60px;
    position: relative;
    bottom: 350px;
    right: 275px
  }

  </style>