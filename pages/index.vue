<template>
  <div class="home">
    <Banner
      class="home-banner"
      title="Welcome BJSS"
      message="This is your secure cloud storage space"
    />

    <div class="tiles">
      <ContentTile
        v-for="tile in tiles"
        :key="tile.title + '-tile'"
        :title="tile.title"
        :text="tile.text"
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
          title: "BJSS Hackathon - Day 1",
          text: "293 Photos",
        },
        {
          title: "BJSS Academy Social",
          text: "26 Photos",
        },
        {
          title: "First day at the Academy",
          text: "59 Photos",
        },
        {
          title: "Staff Weekend",
          text: " 123 Photos",
        },
      ],
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
      } catch (error) {
        this.apiResponse = "Failed to retrieve data from server.";
      }
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
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
  font-family: arial;
}

.tile {
  margin-top: 10px;
  background-color: #008195;
  color: #F4F1F1;
  border: none;
  font-family: arial;
  
}
</style>
