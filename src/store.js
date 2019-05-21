import Vue from 'vue'
import Vuex from 'vuex'

import actions from '@/config/actions'
import mutations from '@/config/mutations'
import { addTask } from '@/services/task_service'

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
    [actions.ADD_TASK] ({ dispatch }, task) {
      addTask(task)
    },
    [actions.TASK_ADDED] ({ commit }, task) {
      commit(actions.ADD_TASK, { task })
    }
  }
})
