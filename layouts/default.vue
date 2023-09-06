<template>
  <div>
    <Header title="ShareVault" />
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

[title = "ShareVault"]{
  font: britannic;
  border: 3px solid black;
}
</style>
