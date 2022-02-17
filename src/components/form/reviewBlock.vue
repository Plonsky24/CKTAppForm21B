<template>
  <div class="reviewBlock">
    <div v-for="(v, k) in questions" :key="k">
      Question #{{k}}: {{v.q}} -> {{answers[k]}}
    </div>
    <div class="buttons">
      <button @click="prev">Previous</button>
      <button @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'reviewBlock',
  computed: {
    ...mapState({
      questions: state => state.form.questions,
      answers: state => state.form.answers,
      totalQ: state => state.form.questions.length
    }),
    ...mapMutations({
      prev: 'form/decrementQuestion',
    }),
    ...mapActions({
      submit: 'form/submitForm',
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
