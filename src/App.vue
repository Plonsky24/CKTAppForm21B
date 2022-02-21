<template>
  <loading v-show="currentPage == 0"/>
  <landing bg="landing/Tindahan BG Wide.png" v-show="currentPage == 1"/>
  <formApplet v-show="currentPage == 2"/>
  <exit bg="logo.png" v-show="currentPage == 3"/>
</template>

<script>
import landing from './components/main/landing.vue'
import loading from './components/main/loading.vue'
import exit from './components/main/exit.vue'
import formApplet from './components/form/formApplet.vue'

import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    landing,
    loading,
    formApplet,
    exit
  },
  computed: mapState({currentPage: state => state.page.page})
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

@font-face {
  font-family: DKCoolCrayon;
  src: url("./assets/fonts/DkCoolCrayon.ttf");
}

@font-face {
  font-family: DKNouveauCrayon;
  src: url("./assets/fonts/DkNouveauCrayonRegular.otf");
}
</style>
