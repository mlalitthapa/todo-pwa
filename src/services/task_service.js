import { pushToRef } from './firebase_service'

const DB_REF_PATH = 'tasks'

export const addTask = (task) => {
  pushToRef(DB_REF_PATH, task)
}
