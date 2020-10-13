import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

export const Logout = () => {
  const history = useHistory()
  const { signOutUser } = useContext(UserContext)

  const handleLogout = async () => {
    await signOutUser()
    history.replace('/')
  }

  return <button onClick={handleLogout}>Logout</button>
}
