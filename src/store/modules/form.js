import formsAPI from '../../api/form.js'

const state = () => ({
  questions: [
    {q: "BUONG PANGALAN", qsub: "(FULL NAME)", p:"Jose Rizal", type: "text", c: [], validation: answer => {return /\S+\s\S+/.test(answer)}},
    {q: "STUDENT NUMBER", qsub: "(20XX-YYYYY)", p:"2018-00001", type: "text", c: [], validation: answer => {return /20\d{2}-\d{5}$/.test(answer)}},
    {q: "IYONG KURSO", qsub: "(DEGREE PROGRAM)", type: "select", c: ["BS Computer Engineering", "BS Electrical Engineering", "BS Electronics Engineering"], validation: function(answer) {return this.c.includes(answer)}},
    {q: "EMAIL", p:"jose.rizal@gmail.com", type: "text", c: [], validation: answer => {return /\w+@\w+\.\w+/.test(answer)}},
    {q: "CONTACT NUMBER", p:"09991234567", type: "text", c: [], validation: answer => {return /09\d{9}/.test(answer)}},
    {q: "FACEBOOK LINK", p:"facebook.com/jose.rizal/", type: "text", c: [], validation: answer => {return !!answer}},
    {q: "PRONOUN/S", p:"They/Them", type: "text", c: [], validation: answer => {return !!answer}},
    {q: "ANO PONG PARA SA INYO?", type:"picker", c:[
      {
        img:"potchi.png",
        val:"Potchi",
        text:"A little pink ball of sweetness, sobrang irresistible. Potchi is a fitting candy to describe people who are really sweet and cute. Ito yung laging nagstastand out at may something sa kanila that makes them shiny, shimmering, splendid.\nCharacteristics: Cute, softie, tagasend ng wholesome memes, di marunong magalit"
      },
      {
        img:"mik-mik.png",
        val:"Mik-Mik",
        text:"Mikmik represents the “eh?” people. Super carefree and lutang in life and often thinks of nonsensical questions which actually makes sense. Bakit naman kasi maglalagay ng straw kung powder yung laman, diba? Nevertheless, gustong-gusto siya lapitan ng mga tao dahil napakaquirky niya.\nCharacteristics: Lutang, random, bubbly, sira-body-clock gang"
      },
      {
        img:"sticko.png",
        val:"Stick-O",
        text:"As it promotes sharing, Stik-O embodies people who are friendly and extroverted, those who are sociable and can be referred to as a \"people person\". Just like how it has different flavors, kayang kaya makifit sa lahat.\nCharacteristics: Extrovert, approachable, bibokid, maraming tropa sa ibang section, BS Org"
      },
      {
        img:"dragon sid.png",
        val:"Dragon Sid",
        text:"A snack that takes time to be opened up. If personified, its seeds shelled within are people who are introverted and shy. But when they do open up, super sayang kasama dahil maraming baong kwento.\nCharacteristics: Mahiyain, introvert, independent, lowkey"
      },
      {
        img:"boy bawang.png",
        val:"Boy Bawang",
        text:"Known for its strong garlicky flavor, this snack depicts brave-hearted people. Those who are courageous and stand firm on their virtues. Nothing stops them when it comes to achieving their dreams. Silver lining yarn?\nCharacteristics: Matapang, competitive, maingay sa social media, politically active"
      },
      {
        img:"sky flakes.png",
        val:"Sky Flakes",
        text:"Often eaten for the purpose of filling our stomachs conveniently, skyflakes is that snack which embodies people who are hardworking, and industrious in their work. Always ready to take on the day ahead kahit ano man ‘yan.\nCharacteristics: Masipag, nasa honors, laging puyat sa reqs, tagabuhat sa research"
      },
    ], validation: function(answer) {return this.c.map(({ val }) => val).includes(answer)}}
  ],
  answers: [
    {a: "", validated: true},
    {a: "", validated: true},
    {a: "", validated: true},
    {a: "", validated: true},
    {a: "", validated: true},
    {a: "", validated: true},
    {a: "", validated: true},
    {a: "", validated: true},
  ],
  qNo: 0
})

// getters
const getters = {
}

// actions (Asynchronous Actions)
const actions = {
  submitForm(context){
    formsAPI.validateForm(context.state.answers);
    context.commit('page/incrementPage', null, {root: true});
  },
  validateQuestion(context){
    var reference = context.state.qNo;
    context.commit('changeValidation', {reference: reference, validity:context.state.questions[reference].validation(context.state.answers[reference].a)});
    if (context.state.answers[reference].validated) {
      context.commit('incrementQuestion');
    }
  }
}

// mutations (Synchronous Actions)
const mutations = {
  updateAnswer(state, payload){
    state.answers[payload.reference].a = payload.answer;
  },
  changeValidation(state, payload){
    state.answers[payload.reference].validated = payload.validity;
  },
  incrementQuestion(state) {
    state.qNo++;
  },
  decrementQuestion(state) {
    if (state.qNo <= 0){
      state.qNo = 0;
    } else {
      state.qNo--;
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
