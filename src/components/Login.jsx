import React from 'react'
import { useLocation } from 'react-router-dom'

import { GoogleAuth } from './GoogleAuth'

export const Login = () => {
  const location = useLocation()

  const { from } = location.state || { from: { pathname: '/' } }

  return (
    <div>
      <GoogleAuth from={from} />
    </div>
  )
}
