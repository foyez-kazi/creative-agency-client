import React, { createContext, useReducer } from 'react'
import { signOut } from '../utils/firebase'
import { Actions } from './constants'

const initialState = {
  currentUser: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    case Actions.SIGN_OUT_USER:
      return {
        ...state,
        currentUser: null,
      }
    default:
      return state
  }
}

export const UserContext = createContext(initialState)

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  function setCurrentUser(user) {
    dispatch({
      type: Actions.SET_CURRENT_USER,
      payload: user,
    })
  }

  async function signOutUser() {
    await signOut()

    dispatch({
      type: Actions.SIGN_OUT_USER,
    })
  }

  return (
    <UserContext.Provider
      value={{
        currentUser: state.currentUser,
        setCurrentUser,
        signOutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
