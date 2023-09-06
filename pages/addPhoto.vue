
<template>
    <div class="addPhoto">
        <h1>Let's add some photos</h1>

        <input type = 'file' ondrop id="photo_uploaded" @change = "handleFileUpload" @drop="drop(event)" @dragover="allowDrop(event)" accept = ".jpg,.jpeg,.png,.webp,.gif" multiple>
        <button @click = "savePhoto()">submit</button>
    </div>
</template>



<script>
import axios from 'axios';
const instance = axios.create({
    baseURL: "https://bjssacademyhackday.azurewebsites.net/IL/teams/atari/files"
})
let encodedImg = [];
let listFiles = [];
export default {
  name: "addPhoto",
  data(){
    return{
        selectedFile: ""
    }
  },
  methods: {
   
    handleFileUpload(event){
        // event.preventDefault()
        //console.log(this.selectedFile)
        console.log(event.target.files.length)
        for(let i =0; i<event.target.files.length; i++){
            this.selectedFile = event.target.files[i]
            
            const reader = new FileReader()
            reader.onloadend = ()=>{
            encodedImg.push(reader.result);
            listFiles.push(event.target.files[i]);
            console.log()
        }
        reader.readAsDataURL(event.target.files[i])
        console.log(encodedImg[i])
        console.log(listFiles[i])
        }
        
        // console.log(event.target.files[0])
        // console.log(event.target.files[1])
    },
    savePhoto() {
        console.log(encodedImg.length)
        for(let i = 0; i<encodedImg.length; i++){

            let splitImg = encodedImg[i].split(",");
            console.log("file name = " + listFiles[i].name)
            let fileType = listFiles[i].name.split(".")[listFiles[i].name.split(".").length-1]
            console.log(splitImg[1])
            console.log(listFiles[i].name)
            console.log(fileType)
            instance.post("https://bjssacademyhackday.azurewebsites.net/IL/teams/atari/files", {
                file: splitImg[1],
                fileName: listFiles[i].name,
                fileMimeType: "image/" + fileType}
                ).then(this.selectedFile = "")
        }
        alert(encodedImg.length + " Picture/s Uploaded Successfully!")
        encodedImg = []
        listFiles = []
    }
}

};
</script>