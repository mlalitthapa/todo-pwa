import Vue from 'vue'
import Vuex from 'vuex'

import actions from '@/config/actions'
import mutations from '@/config/mutations'
import { addTask, fetchTasks } from '@/services/task_service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    loading: false
  },
  mutations: {
    [mutations.ADD_TASK] (state, payload) {
      state.tasks.push(payload.task)
    },
    [mutations.TOGGLE_LOADER] (state, status) {
      state.loading = status
    },
    [mutations.FETCH_TASKS] (state, payload) {
      state.tasks = payload.tasks
    }
  },
  actions: {
    [actions.ADD_TASK] ({ dispatch }, task) {
      addTask(task)
    },
    [actions.TASK_ADDED] ({ commit }, task) {
      commit(mutations.ADD_TASK, { task })
    },
    [actions.START_LOADER] ({ commit }) {
      commit(mutations.TOGGLE_LOADER, true)
    },
    [actions.STOP_LOADER] ({ commit }) {
      commit(mutations.TOGGLE_LOADER, false)
    },
    [actions.FETCH_TASKS] ({ dispatch }) {
      dispatch(actions.START_LOADER)
      fetchTasks()
    }
  }
})
