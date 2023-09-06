
<template>
    <div class="addPhoto">
        <h1>Let's add some photos</h1>
        
        <input type = 'file' ondrop id="photo_uploaded" @change = "handleFileUpload" @drop="drop(event)" @dragover="allowDrop(event)">
        <button @click = "savePhoto()">submit</button>
    </div>
</template>



<script>
import axios from 'axios';
const instance = axios.create({
    baseURL: "https://bjssacademyhackday.azurewebsites.net/IL/teams/atari/files"
})
let encodedImg = "test";
export default {
  name: "addPhoto",
  data(){
    return{
        selectedFile: null
    }
  },
  methods: {
   
    handleFileUpload(event){
        console.log(encodedImg)
        this.selectedFile = event.target.files[0]
        const reader = new FileReader()
        reader.onloadend = ()=>{
            encodedImg = reader.result;
        }
        reader.readAsDataURL(this.selectedFile)
    },
    savePhoto() {
        console.log("save photo" + encodedImg)
        let splitImg = encodedImg.split(",");

        let testfilename = "picture"
        const formattedImg = {
            file: splitImg[1],
            fileName: testfilename
        };

        console.log(formattedImg)
        let fileType = this.selectedFile.name.split(".")[this.selectedFile.name.split(".").length-1]
        
        instance.post("https://bjssacademyhackday.azurewebsites.net/IL/teams/atari/files", {
            file: splitImg[1],
            fileName: this.selectedFile.name,
            fileMimeType: "image/" + fileType}
            ).then(this.selectedFile = "", alert("Pic Uploaded Successfully!"))
    }
}

};
</script>