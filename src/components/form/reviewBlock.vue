<template>
  <div class="reviewBlock grid grid-rows-5 h-full">
    <h1 class="row-start-1">Mga Sagot Ninyo:</h1>
    <div class="row-start-2 row-span-3">
      <p class="question" :class="'row-start-' + (k+1)" v-for="(v, k) in questions" :key="k">{{v.q}}</p>
      <p class="answer" :class="'row-start-' + (k+1)" v-for="(v, k) in questions" :key="'ans-' + k">{{answers[k].a}}</p>
    </div>
    <div class="buttons row-start-5">
      <button @click="prev"><img :src="imgURL(bb)" alt="Back"></button>
      <button @click="submit"><img :src="imgURL(fb)" alt="Back"></button>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'reviewBlock',
  props: {
    bb:String,
    fb:String
  },
  computed: {
    ...mapState({
      questions: state => state.form.questions,
      answers: state => state.form.answers,
      totalQ: state => state.form.questions.length
    }),
    ...mapMutations({
      prev: 'form/decrementQuestion',
    })
  },
  methods: {
    imgURL: function(loc) {
      return require('../../assets/'+String(loc))
    },
    ...mapActions({
      submit: 'form/submitForm',
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
  align-self: center;
  font-size: 3rem;
}

.reviewBlock {
  font-family: DkCoolCrayon, sans-serif;
  font-size:2rem;
  color:#db917b;
  overflow: hidden;
}

.reviewBlock > div:first-of-type {
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom:3rem;
  max-height:50vh;
  overflow:auto;
}

.question{
  grid-column-start: 1;
  justify-self: end;
}

.answer {
  grid-column-start: 2;
  justify-self:start;
}

.buttons {
  display:flex;
  align-items: center;
  justify-content:center;
  position:relative;
  z-index:4;
}

.buttons button {
  padding:2rem;
  box-sizing: border-box;
  transition: 0.2s ease-out;
  position:relative;
}

.buttons button img {
  max-width:12rem;
  min-width:10rem;
}

.buttons button:hover {
  color:white;
}

.buttons button:hover {
  transform:scale(105%);
}

.buttons button:active {
  transform:scale(95%);
}

.buttons button:first-of-type::after {
  content:"Bumalik";
  position:absolute;
  top:-5%;
  left:44%;
  transform: translateX(-50%);
}

.buttons button {
  padding-bottom: 0;
}

.buttons button:last-of-type::after {
  content:"Ipasa";
  position:absolute;
  top:-5%;
  left:44%;
  transform: translateX(-50%);
}

/* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Track */

/* Handle */
::-webkit-scrollbar-thumb {
  background: #db917b;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #db917bAA;
}

</style>
