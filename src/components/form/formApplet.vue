<template>
  <div class="formApplet h-screen">

    <formBlock v-for="(v, k) in questions" :key="k" :question="v" :itemNo="k" v-show="currentQuestion == k"/>
    <reviewBlock v-show="currentQuestion == indexReview"/>
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
  computed: mapState({
    questions: state => state.form.questions,
    currentQuestion: state => state.form.qNo,
    indexReview: state => state.form.questions.length
  })
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
  background-image:url("~@/assets/form/Background.png");
  background-size:cover;
  background-position: center;
}


</style>
