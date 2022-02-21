<template>
  <div class="loadingscreen">
    <div @click="next" class="logo" >
      <img @click="next" src="@/assets/upcircuitformal_small.png" alt="U.P. Circuit Logo" class="circuit-logo">
    </div>
    <div class="loadingRing">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="disclaimer no-select">
      <h2 class="clickTag">Please wait, we're just setting some things up.</h2>
      For a better viewing experience, please view this site on a Desktop Computer
    </div>
  </div>
</template>

<script>
// import {mapMutations} from 'vuex'
export default {
  name: 'loading'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.loadingscreen {
  background-color: #111111;
  position: fixed;
  height: 100%;
  width: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 9980;
  text-align: center;
  -webkit-transition: opacity 1.5s;
  transition: opacity 1.5s;
}
.loadingscreen span {
  color: #dddddd;
  width: 100vh;
  padding: 0;
}
.loadingscreen .logo {
  position: relative;
  width: 52vh;
  height: 52vh;
  top: 50%;
  -webkit-transform: translateY(-56%);
  transform: translateY(-56%);
  -webkit-transition: opacity 1.5s;
  transition: opacity 1.5s;
  margin: auto;
}
.loadingscreen .circuit-logo {
  width: 100%;
  height: 100%;
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
  -webkit-animation-timing-function: ease;
  animation-timing-function: ease;
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
}
.loadingscreen .circuit-logo:hover {
  transform: scale(1.1);
  transition: all ease 500ms;
}

.loadingscreen .circuit-logo:active {
  transform: scale(0.9);
  transition: all ease 500ms;
}

.loadingscreen .disclaimer {
  position: absolute;
  bottom: 10%;
  right: 50%;
  -webkit-transform: translateX(50%);
  transform: translateX(50%);
  color: #FFF;
  font-size: 2.25vh;
  text-align: center;
}

.loadingRing {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 256px;
  height: 256px;
  margin-left: -128px;
  margin-top: -128px;
}
.loadingRing div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  z-index:3;
  width: 256px;
  height: 256px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.17, 0.88, 0.73, 0.12) infinite;
  border-color: #fff transparent transparent transparent;
}
.loadingRing div:nth-child(1) {
  animation-delay: -0.45s;
}
.loadingRing div:nth-child(2) {
  animation-delay: -0.3s;
}
.loadingRing div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-moz-keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-o-keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
