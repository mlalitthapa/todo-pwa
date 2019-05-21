import { pushToRef } from './firebase_service'

export const addTask = (task) => {
  pushToRef(task)
}
