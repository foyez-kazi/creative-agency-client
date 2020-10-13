import firebase from 'firebase/app'
import 'firebase/auth'

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
}

firebase.initializeApp(firebaseConfig)

export const signInWithPopup = async (provider) => {
  try {
    const result = await firebase.auth().signInWithPopup(provider)
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken
    const { displayName, email, photoURL } = result.user
    const user = { displayName, email, photoURL }

    return { user, token }
  } catch (error) {
    return { error }
  }
}

export const getCurrentUser = async () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((userAuth) => {
      unsubscribe()
      let user = null

      if (!userAuth) return resolve({ user })

      const { displayName, email, photoURL } = userAuth
      user = { displayName, email, photoURL }

      resolve({ user })
    }, reject)
  })
}

export const signOut = async () => {
  await firebase.auth().signOut()
}

export default firebase
