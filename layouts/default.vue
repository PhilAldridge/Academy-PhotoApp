<template>
  <div>
    <Header title="BJSS Hack Day 1" />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header,
  },
}
</script>

<style scoped lang="scss">
body {
  margin: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
}
</style>
