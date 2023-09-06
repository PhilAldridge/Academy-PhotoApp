<template>
  <div>
    <Header title="BJSS Gallery" />
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
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #506f8f;
  overflow-y: scroll;
}
</style>
