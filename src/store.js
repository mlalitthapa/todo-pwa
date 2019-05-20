import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Get a job',
        description: 'Search job',
        completed: false
      },
      {
        id: 2,
        title: 'Take a walk',
        description: 'Wake up early in the morning and go for a walk',
        completed: true
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
