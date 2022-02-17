const state = () => ({
  questions: [
    {q: "A?", type: "text", c: []},
    {q: "B?", type: "text", c: []},
    {q: "C?", type: "select", c: ["a", "b", "c"]},
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
