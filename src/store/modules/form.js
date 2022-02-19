const state = () => ({
  questions: [
    {q: "BUONG PANGALAN", qsub: "(FULL NAME)", p:"Jose Rizal", type: "text", c: []},
    {q: "B?", type: "text", c: []},
    {q: "C?", type: "select", c: ["a", "b", "c"]},
    {q: "Ano pong para sa inyo?", type:"picker", c:[
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
    ]}
  ],
  answers: ["", "", ""],
  qNo: 0
})

// getters
const getters = {
}

// actions (Asynchronous Actions)
const actions = {
  submitForm(context){
    context.commit('page/incrementPage', null, {root: true});
  }
}

// mutations (Synchronous Actions)
const mutations = {
  updateAnswer(state, payload){
    state.answers[payload.reference] = payload.answer
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
