import firebase from 'firebase/app'
import 'firebase/database'

import store from '@/store'
import { TASK_ADDED, STOP_LOADER } from '@/config/actions'
import { FETCH_TASKS } from '@/config/mutations'

const init = () => {
  if (firebase.apps.length) return
  const config = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: `${process.env.VUE_APP_FIREBASE_APP_NAME}.firebaseapp.com`,
    databaseURL: `https://${process.env.VUE_APP_FIREBASE_APP_NAME}.firebaseio.com`,
    storageBucket: `${process.env.VUE_APP_FIREBASE_APP_NAME}.appspot.com`
  }
  firebase.initializeApp(config)
}

const getDBReference = () => {
  init()
  return firebase.database()
}

export const pushToRef = (path, data) => {
  const db = getDBReference()
  db.ref(path).push(data)
    .then(() => {
      store.dispatch(TASK_ADDED, data)
    })
    .catch(console.log)
}

export const fetchRef = (path) => {
  getDBReference().ref(path).once('value', snapshot => {
    store.commit(FETCH_TASKS, { tasks: snapshot.val() })
    store.dispatch(STOP_LOADER)
  })
}
