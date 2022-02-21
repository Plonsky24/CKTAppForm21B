<template>
  <div class="formApplet h-screen" v-bind:style="{backgroundImage:'url(' + imgURL +')'}">

    <formBlock :bb='leftbutton' :fb="rightbutton" v-bind:bg="blockBg" v-for="(v, k) in questions" :key="k" :question="v" :itemNo="k" v-show="currentQuestion == k"/>
    <reviewBlock :bb='leftbutton' :fb="rightbutton" v-show="currentQuestion == indexReview"/>
  </div>
</template>

<script>
import formBlock from './formBlock.vue'
import reviewBlock from './reviewBlock.vue'
import {mapState} from 'vuex'

export default {
  name: 'formApplet',
  components: {
    formBlock,
    reviewBlock
  },
  props: {
    bg:String,
    blockBg:String,
    leftbutton:String,
    rightbutton:String
  },
  computed: {
    imgURL: function() {
      return require('../../assets/'+this.bg)
    },
    ...mapState({
      questions: state => state.form.questions,
      currentQuestion: state => state.form.qNo,
      indexReview: state => state.form.questions.length
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

.formApplet, #special-form {
  position: relative;
  /* background-image:url("~@/assets/form/Background.png"); */
  background-size:cover;
  background-position: center;
}


</style>
