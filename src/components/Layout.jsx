import React, { useContext, useEffect } from 'react'
import { getCurrentUser } from '../utils/firebase'
import { UserContext } from '../context/UserProvider'

export const Layout = ({ children }) => {
  const { setCurrentUser } = useContext(UserContext)

  useEffect(() => {
    const isUserLoggedIn = async () => {
      const { user } = await getCurrentUser()
      if (user) {
        setCurrentUser(user)
      }
    }

    isUserLoggedIn()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>{children}</div>
}
