import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { UserContext } from '../context/UserProvider'
import firebase, { signInWithPopup } from '../utils/firebase'
import GoogleIcon from '../images/icons/google.png'

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
    <button
      className="btn"
      style={{
        border: '1px solid #ccc',
        borderRadius: '100px',
        background: '#fff',
        padding: '10px 50px',
        position: 'relative',
      }}
      onClick={() => signInWithGoogle()}
    >
      <img
        style={{ position: 'absolute', left: 8 }}
        src={GoogleIcon}
        alt="Google Icon"
        width="20"
      />
      <span>Continue with Google</span>
    </button>
  )
}
