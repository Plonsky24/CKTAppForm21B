<template>
  <div class="formBlock">
    <h1>I am Item #{{itemNo + 1}}, {{question.q}}, {{question.type}}</h1>
    <input v-model="answer" v-if="question.type == 'text'">
    <select v-model="answer" v-if="question.type == 'select'">
      <option v-for="choice in question.c" :key="choice">{{choice}}</option>
    </select>
    <div class="buttons">
      <button @click="prev">Previous</button>
      <button @click="next">Next</button>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'formBlock',
  props: {
    itemNo: Number,
    question: Object,
  },
  computed: {
    answer: {
      get () {
        return this.$store.state.form.answers[this.itemNo]
      },
      set (value) {
        this.$store.commit('form/updateAnswer', {answer: value, reference: this.itemNo})
      }
    },
    ...mapMutations({
      prev: 'form/decrementQuestion',
      next: 'form/incrementQuestion',
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
