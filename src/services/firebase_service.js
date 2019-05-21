import firebase from 'firebase/app'
import 'firebase/database'

import store from '@/store'
import { TASK_ADDED } from '@/config/actions'

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
  db.ref('tasks').push(data)
    .then(() => {
      store.dispatch(TASK_ADDED, data)
    })
    .catch(console.log)
}
