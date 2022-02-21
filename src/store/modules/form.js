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
        text:"gwapo mo brad"
      },
      {
        img:"mik-mik.png",
        val:"Mik-Mik",
        text:"gwapo mo brad"
      },
      {
        img:"sticko.png",
        val:"Stick-O",
        text:"gwapo mo brad"
      },
      {
        img:"dragon sid.png",
        val:"Dragon Sid",
        text:"gwapo mo brad"
      },
      {
        img:"boy bawang.png",
        val:"Boy Bawang",
        text:"gwapo mo brad"
      },
      {
        img:"sky flakes.png",
        val:"Sky Flakes",
        text:"gwapo mo brad"
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
