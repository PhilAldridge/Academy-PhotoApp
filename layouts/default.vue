<template>
  <div>

    <Header title="Save the Date" class = "header"/>
    <slot /> <!--This is the magic - all content appears in this slot element-->
  </div>
</template>

<script>
export default {};
</script>

<style>
/* header {
  margin: 0px;
  text-align: right;
} */

body {
  margin: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #452c50;
  overflow-y: scroll;
  
}
</style>
