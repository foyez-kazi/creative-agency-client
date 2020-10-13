import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { UserContext } from '../context/UserProvider'

export const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(UserContext)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}
