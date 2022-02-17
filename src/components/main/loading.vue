<template>
  <div class="loading">
    <h1>I'm a loading screen!</h1>
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px;
  text-align: center;
}
div{
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: black;
  z-index: 9999;
}
</style>
