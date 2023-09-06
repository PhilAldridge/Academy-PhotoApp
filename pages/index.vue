<template>
  <div class="home">
    <Banner
      class="home-banner"
      title="Welcome to the BJSS Academy!"
      message="This is a simple Vue app demonstrating components, routing and API calls."
    />
    <div class="tiles">
      <ContentTile
        v-for="apiResponseItem in apiResponse.data"
        :imgsrc="apiResponseItem"
        class="tile"
      />
      <div class="tile"></div>
    </div>
    <br />
    
  </div>
</template>

<script>

export default {
    name: "IndexPage",
    data() {
        return {
            tiles: [
                {
                    title: "A tile",
                    text: "This is a reusable component.",
                    imgsrc: "https://m.media-amazon.com/images/I/612DUIJVNDL._AC_SX679_.jpg"
                },
                {
                    title: "Another tile",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla purus eget nibh venenatis.",
                    imgsrc: "https://cdn-icons-png.flaticon.com/256/0/619.png"
                },
                {
                    title: "A third tile",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus, nibh id faucibus egestas.",
                },
                {
                    title: "A fourth tile",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus, nibh id faucibus egestas.",
                },
            ],
            contentTiles: [[
                {
                    title: "A tile",
                    text: "This is a reusable component.",
                },
                {
                    title: "Another tile",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla purus eget nibh venenatis.",
                }],[
                {
                    title: "A tile",
                    text: "This is a reusable component.",
                },
                {
                    title: "Another tile",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla purus eget nibh venenatis.",
                }]],
            apiResponse: "",
        };
    },
    mounted() {
        this.fetchGreeting();
    },
    methods: {
        async fetchGreeting() {
            try {
                this.apiResponse = await fetchWrapper.get("https://bjssacademyhackday.azurewebsites.net/IL/teams/atari/files");
    
            }
            catch (error) {
                this.apiResponse = "Failed to retrieve data from server.";
            }
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
