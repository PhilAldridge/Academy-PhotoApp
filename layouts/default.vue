<template>
  <div>
    <Header title="BJSS Hack Day 1" />
    <slot /> <!--This is the magic - all content appears in this slot element-->
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  overflow-y: scroll;
}
</style>
