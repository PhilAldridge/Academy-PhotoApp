<template>
  <div class="home">
    <Banner
      class="home-banner"
      title="Welcome to the BJSS Gallery!"
      message="This Gallery was created by team Sinclair in order for BJSS users to upload and store photos."
    />

    <div class="tiles">
      <ContentTile
        v-for="tile in apiResponse.data"
        :key="tile + '-tile'"
        :title="tile"
        :text="tile"
        :image="tile"
        class="tile"
      />
    </div>
    <br />
    <!-- <div v-if="apiResponse">Server response: {{ apiResponse }}</div> -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      apiResponse: {},
    };
  },
  mounted() {
    this.fetchGreeting();
  },
  methods: {
    async fetchGreeting() {
      try {
        this.apiResponse = await fetchWrapper.get("https://bjssacademyhackday.azurewebsites.net/IL/teams/sinclair/files");
      } catch (error) {
        this.apiResponse = "Failed to retrieve data from server.";
      }
    },
  },
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
