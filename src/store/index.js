import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    options: [
      { name: "Jab", id: 0 },
      { name: "Uppercut", id: 1 },
      { name: "Cross", id: 2 },
      { name: "Hook", id: 3 },
      { name: "Break", id: 4 }
    ],
    times: [30, 60, 90],
    training: [],
    combos: []
  },
  mutations: {
    addTraining(state, ex) {
      state.training.push(ex)
    },
    removeTraining(state, ex) {
      for (var i = 0; i < state.training.lenght; i++) {
        if (state.training[i] == ex) {
          state.training.splice(i, 1)
        }
      }
    },
    setTraining(state, tr) {
      state.training = tr
    }
  },
  actions: {},
  modules: {}
})
