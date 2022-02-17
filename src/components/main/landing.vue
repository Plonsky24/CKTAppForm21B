<template>
  <div class="landing">
    <img :src="imgURL">
    <br>
    <button @click="next">Next</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'landing',
  props: {
    bg: String
  },
  mounted() {
    setTimeout(() => this.$store.dispatch('page/acquirePage'), 2000);
  },
  computed: {
    imgURL: function() {
      return require('../../assets/'+this.bg)
    },
    ...mapActions({
      next: 'page/incrementPage'
    })
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
