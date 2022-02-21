<template>
  <div class="exit grid grid-cols-2" v-bind:style="{backgroundImage:'url(' + bgURL +')'}">
    <img class="img-tindahan" :src="imgURL">
    <!-- <img class="img-text" src="@/assets/exit/kita-kits.png"> -->
    <div class="bannertext col-start-2">
      <h1>KITA-KITS!</h1>
      <p>@ Application Orientation</p>
      <p>February 26, 2022</p>
      <p>3-5PM</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'landing',
  props: {
    bg: String,
    bgImg:String
  },
  computed: {
    bgURL: function() {
      return require('../../assets/'+this.bg)
    },
    imgURL: function() {
      return require('../../assets/'+this.bgImg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}

.exit {
  /* background-image: url("~@/assets/exit/Background.png"); */
  height:100vh;
  background-size: cover;
  background-position:center;
  overflow-y: hidden;
}

.img-tindahan {
  position: absolute;
  /* width: 60vw; */
  max-height:90vh;
  width:auto;
  bottom: 0;
}

.img-text {
  position:absolute;
  width:40vw;
  height:auto;
  right:0;
}

.bannertext {
  /* position:absolute;
  bottom:50%;
  right:25%; */
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position:relative;
  top:7.5%;
}

.bannertext h1 {
  font-family: DKCoolCrayon, sans-serif;
  color:#db917b;
  font-size:6rem;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.10);
  /* padding-bottom:0.25rem; */
  box-sizing: border-box;
  text-align: center;
  margin-bottom:0.1rem;
}

.bannertext p {
  font-family:DKCoolCrayon;
  font-size:2.2rem;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  color:#db917b;
  opacity:0.5;
  position:relative;
  margin-top:-0.5rem;
  top:-1.4rem;
}

</style>
