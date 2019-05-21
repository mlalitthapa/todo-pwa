import Vue from 'vue'
import Vuex from 'vuex'

import { TASK } from '@/config/modules'
import task from './store/task'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    [TASK]: task
  }
})
