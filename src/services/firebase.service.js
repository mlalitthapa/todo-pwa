import firebase from 'firebase/app'
import 'firebase/database'

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

export const pushToRef = (path, data, successCallback, errorCallback) => {
  const db = getDBReference()
  db.ref(path).push(data)
    .then(response => successCallback(response.key, data))
    .catch(errorCallback)
}

export const fetchRef = (path, callback) => {
  getDBReference().ref(path).once('value', callback)
}
