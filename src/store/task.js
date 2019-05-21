import mutations from '@/config/mutations'
import actions from '@/config/actions'
import loaders from '@/config/loaders'
import { addTask, fetchTasks } from '@/services/task.service'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    tasks: [],
    loading: ''
  },
  mutations: {
    [mutations.ADD_TASK] (state, payload) {
      state.tasks[payload.key] = payload.task
    },
    [mutations.TOGGLE_LOADER] (state, loader) {
      state.loading = loader
    },
    [mutations.FETCH_TASKS] (state, payload) {
      state.tasks = payload.tasks
    }
  },
  actions: {
    [actions.ADD_TASK] ({ dispatch, commit }, task) {
      commit(mutations.TOGGLE_LOADER, loaders.ADDING_TASK)
      addTask(task)
    },
    [actions.TASK_ADDED] ({ commit }, payload) {
      commit(mutations.ADD_TASK, payload)
      commit(mutations.TOGGLE_LOADER, '')
      router.push('/')
    },
    [actions.FETCH_TASKS] ({ dispatch, commit }) {
      commit(mutations.TOGGLE_LOADER, loaders.FETCHING_TASKS)
      fetchTasks()
    }
  }
}
