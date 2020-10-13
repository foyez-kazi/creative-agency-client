import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { UserContext } from '../context/UserProvider'
import firebase, { signInWithPopup } from '../utils/firebase'

export const GoogleAuth = ({ from }) => {
  const { setCurrentUser } = useContext(UserContext)
  const history = useHistory()

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user, error } = await signInWithPopup(provider)

    if (!error) {
      setCurrentUser(user)
      history.replace(from)
    }
  }

  return (
    <div>
      <button onClick={() => signInWithGoogle()}>Continue with Google</button>
    </div>
  )
}
