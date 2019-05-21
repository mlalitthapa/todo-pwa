import { pushToRef, fetchRef } from './firebase.service'

import store from '@/store'
import { FETCH_TASKS } from '@/config/mutations'
import { STOP_LOADER, TASK_ADDED } from '@/config/actions'
import { TASK } from '@/config/modules'

const DB_REF_PATH = 'tasks'
const STORE_MODULE = `${TASK}/`

const taskAdded = (key, task) => {
  store.dispatch(STORE_MODULE + TASK_ADDED, {
    task,
    key
  })
}

const taskAddFailed = () => (console.log)

export const addTask = task => {
  pushToRef(DB_REF_PATH, task, taskAdded, taskAddFailed)
}

const tasksFetched = snapshot => {
  store.commit(STORE_MODULE + FETCH_TASKS, { tasks: snapshot.val() })
  store.dispatch(STORE_MODULE + STOP_LOADER)
}

export const fetchTasks = () => {
  fetchRef(DB_REF_PATH, tasksFetched)
}
