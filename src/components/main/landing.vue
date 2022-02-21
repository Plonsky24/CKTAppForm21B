<template>
  <div class="landing" >
    <img id="bg-dummy-landing">
    <button @click="next">
      <img :src="imgURL(button)">
    </button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'landing',
  props: {
    bg: String,
    button: String
  },
  computed: {},
  methods: {
    imgURL: function(loc) {
      return require('../../assets/'+String(loc))
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

#bg-dummy-landing{
  height:100vh;
  width:auto;
  position:absolute;
  display:none;
}

.landing {
  background-image: url("~@/assets/landing/Tindahan BG.png");
  height:100vh;
  background-size: cover;
  background-position: 50% 75%;
}

.landing button {
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  bottom: 0.75rem;
  overflow-y: hidden;
  transition: 0.2s ease-out;
}

.landing button > img {
  width:15rem;
  height:auto;
}

.landing button:hover {
  transform:translateX(-50%) scale(105%);
}

.landing button:active {
  transform:translateX(-50%) scale(95%);
}

</style>
