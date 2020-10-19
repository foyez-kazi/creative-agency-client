import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../images/logos/logo.png'
import { GoogleAuth } from './GoogleAuth'

export const Login = () => {
  const location = useLocation()

  const { from } = location.state || { from: { pathname: '/' } }

  return (
    <div className="w-50 mx-auto text-center mt-5">
      <img className="mb-3" src={Logo} alt="logo" width="100" />
      <div className="p-5" style={{ border: '1px solid #000' }}>
        <h3>Login With</h3>
        <GoogleAuth from={from} />
        <p className="mt-2">
          Don't have an account? <Link to="">Create an account</Link>
        </p>
      </div>
    </div>
  )
}
