import mutations from '@/config/mutations'
import actions from '@/config/actions'
import { addTask, fetchTasks } from '@/services/task.service'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    tasks: [],
    loading: false
  },
  mutations: {
    [mutations.ADD_TASK] (state, payload) {
      state.tasks[payload.key] = payload.task
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
    [actions.TASK_ADDED] ({ commit }, payload) {
      commit(mutations.ADD_TASK, payload)
      router.push('/')
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
}
