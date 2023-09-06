<template>
  <div class="home">
    <Banner
      class="home-banner"
      title="Welcome to the BJSS Academy!"
      message="This is a simple Vue app demonstrating components, routing and API calls."
    />
    <Banner2
    />

    <div class="tiles">
      <ContentTile
        v-for="tile in tiles"
        :key="tile.title + '-tile'"
        :imgsrc="tile.imgsrc"
        class="tile"
      />
    </div>
    <br />
    <div v-if="apiResponse">Server response: {{ apiResponse }}</div>
    
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
                this.apiResponse = await fetchWrapper.get("your://url.to/api/goes/here");
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
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.tile {
  margin-top: 10px;
}
</style>
