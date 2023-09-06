
<template>
    <div class="addPhoto">
        <h1>Let's add some photos</h1>

        <input type = 'file' ondrop id="photo_uploaded" @change = "handleFileUpload" @drop="drop(event)" @dragover="allowDrop(event)" accept = ".jpg,.jpeg,.png,.webp,.gif" multiple>
        <button @click = "savePhoto()">submit</button>
<h3>{{ message }}</h3>
        <div class="tiles">
      <ContentTile @click="fetchGreeting()"
        v-for="apiResponseItem in this.addedFiles"
        :imgsrc="apiResponseItem"
        class="tile"
      />
      <div class="tile"></div>
    </div>
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
        selectedFile: "",
        addedFiles: [],
        message:""
    }
  },
  methods: {
   
    handleFileUpload(event){
        // event.preventDefault()
        for(let i =0; i<event.target.files.length; i++){
            this.selectedFile = event.target.files[i]
            
            const reader = new FileReader()
            reader.onloadend = ()=>{
            encodedImg.push(reader.result);
            listFiles.push(event.target.files[i]);
        }
        reader.readAsDataURL(event.target.files[i])
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
                ).then((res) =>{
                    this.selectedFile = "";
                    const returnUrl = res.data.split("'")[3];
                    this.addedFiles.push(returnUrl);
                }
                )
        }
        this.message = "You successfully uploaded these photos!"
        encodedImg = []
        listFiles = []
    },
    
}

};
</script>

<style scoped>
.home {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
 
.home-banner {
  margin-bottom: 35px;
} 

.tiles {
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
}


.tile {
  display: flex;
  flex-grow: 1;
  margin: 10px;
  align-content: center;
  vertical-align:center;
  cursor: pointer;
}

.tile:last-child{
  flex-grow: 10;
}
</style>