<template>
  <div class="landing">
    <img :src="imgURL">
  </div>
</template>

<script>
export default {
  name: 'landing',
  props: {
    bg: String
  },
  computed: {
    imgURL: function() {
      return require('../../assets/'+this.bg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px;
  text-align: center;
}
</style>
