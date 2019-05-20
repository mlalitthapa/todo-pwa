import Vue from 'vue'
import Vuex from 'vuex'

import actions from '@/config/actions'
import mutations from '@/config/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    [mutations.ADD_TASK] (state, payload) {
      state.tasks.push(payload.task)
    }
  },
  actions: {
    [actions.ADD_TASK] ({ commit }, task) {
      commit(actions.ADD_TASK, { task })
    }
  }
})
