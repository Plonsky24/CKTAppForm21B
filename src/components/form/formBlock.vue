<template>
  <div class="formBlock grid grid-cols-9 grid-rows-5 gap-2 min-h-full">

    <div v-if="question.type != 'picker'">
      <img :src="imgURL" id="bg-dummy-main">
      <span class="input-label">{{question.q}}</span>
      <span class="input-sublabel">{{question.qsub}}</span>
      <input :placeholder="question.p" class="menu-input" v-model="answer" v-if="question.type == 'text'" :class="{errCSS: !valid}">

      <select class="menu-input" v-model="answer" v-if="question.type == 'select'">
        <option v-for="choice in question.c" :key="choice">{{choice}}</option>
      </select>
    </div>

    <div v-if="question.type != 'picker'" class="col-start-2 row-start-3 row-span-2 flex items-center justify-center">
      <button @click="prev"><img :src="backImgURL"></button>
    </div>
    <div v-if="question.type != 'picker'" class="col-start-8 row-start-3 row-span-2 flex items-center justify-center">
      <button @click="next"><img :src="nextImgURL" alt="Next"></button>
    </div>

    <div v-if="question.type == 'picker'" class="picker-container flex flex-col items-center justify-center col-span-5 row-span-5 row-start-1 col-start-1">
      <h1 class="special-header">{{question.q}}</h1>
      <div class="picker grid grid-cols-3 grid-rows-2 gap-2">
        <div v-for="(choice, index) in question.c" :key="choice.val" :class="index < 3 ? 'top-row' : 'bottom-row'">
          <input class="hidden-input" v-model="answer" name="pickergroup" type="radio" :id="choice.val" :value="choice.val">
          <label :for="choice.val" class="picker-item">
            <img :src= "require('@/assets/snacks/' + choice.img)">
          </label>
        </div>
      </div>
    </div>

    <div v-if="question.type == 'picker'" class="picker-info flex flex-col items-center justify-center col-span-4 row-span-5 col-start-6">
      <h1>{{answer || "Pili lang po kayo sa kaliwa!"}}</h1>
      <p>{{answer ? question.c.find(item => item.val == answer).text : ""}}</p>
      <div class="picker-nav">
        <button @click="prev"><img :src="backImgURL" alt="Back"></button>
        <button @click="next"><img :src="nextImgURL" alt="Next"></button>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations, mapActions} from 'vuex'
export default {
  name: 'formBlock',
  props: {
    itemNo: Number,
    question: Object,
    bg:String,
    bb:String,
    fb:String
  },
  computed: {
    imgURL: function() {
      return require('../../assets/'+this.bg)
    },
    backImgURL: function() {
      return require('../../assets/'+this.bb)
    },
    nextImgURL: function() {
      return require('../../assets/'+this.fb)
    },
    answer: {
      get () {
        return this.$store.state.form.answers[this.itemNo].a
      },
      set (value) {
        this.$store.commit('form/updateAnswer', {answer: value, reference: this.itemNo})
      }
    },
    valid: function() {
      return this.$store.state.form.answers[this.itemNo].validated
    },
    ...mapMutations({
      prev: 'form/decrementQuestion',
    })
  },
  methods: {
    ...mapActions({
      next: 'form/validateQuestion',
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bg-dummy-main{
  position:absolute;
  /* z-index: -1; */
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  height:80vh;
  width:auto;
  /* display:none; */
}

h1 {
  margin: 40px;
  text-align: center;
}

.formBlock{
  overflow-y:hidden;
  z-index: 2;
}

.errCSS {
  color: #db917b !important
}

.input-label {
  position:absolute;
  bottom:44.5vh;
  left:50%;
  transform:translateX(-50%);
  font-family: DKCoolCrayon, sans-serif;
  font-size:2.7rem;
  white-space: nowrap;
  color:black;
}

.input-sublabel {
  position:absolute;
  bottom:40.5vh;
  left:50%;
  transform:translateX(-50%);
  font-family: DKCoolCrayon, sans-serif;
  font-size:1.75rem;
  color:black;
}

.menu-input {
  position:absolute;
  bottom:30.5vh;
  left:50%;
  transform:translateX(-50%);
  background-color:transparent;
  text-align:center;
  font-family:DKNouveauCrayon;
  font-size:2rem;
  /* color:#db917b; */
  color:black;
}

select.menu-input {
  min-width:20rem;
}

button {
  min-width: 10rem;
  transition: transform 0.2s ease-out;
}

button:hover {
  transform:scale(105%);
}

button:active {
  transform:scale(95%);
}


h1.special-header {
  font-family: DKCoolCrayon, sans-serif;
  color:#db917b;
  font-size:3.5rem;
  /* padding-bottom:0.25rem; */
  box-sizing: border-box;
  text-align: center;
}

.picker {
  height:80%;
  display:grid;
  width:85%;
  align-self:center;
  justify-self:center;
}

.picker > * {
  position:relative;
}

.picker > .top-row {
  align-self:end;
}

.picker > .bottom-row {
  align-self: start;
}

.picker-info > h1 {
  font-family: DKCoolCrayon, sans-serif;
  color:#db917b;
  font-size:3.5rem;
  /* padding-bottom:0.25rem; */
  box-sizing: border-box;
}

.picker-info > p {
  font-family:DKNouveauCrayon;
  font-size:2rem;
  color:#db917b;
}

.picker-item::after {
  z-index:3;
  background-image: url(~@/assets/snacks/select.png);
  position:absolute;
  left:48%;
  top:49%;
  transform:translate(-50%, -50%);
  content: "";
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition:all 0.2s ease-out;
  opacity:0;
}

.picker-item:hover:after {
  opacity:0.5;
}

.hidden-input:checked + .picker-item::after {
  opacity:1;
}

.picker-nav {
  display:flex;
  align-items: center;
  justify-content: center;
}
.picker-nav button {
  width:35%;
  margin:0;
  position:relative;
  left:3.5%;
}

.hidden-input {
  display:none;
}
</style>
