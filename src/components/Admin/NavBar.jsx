import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../images/logos/logo.png'

export const NavBar = ({ serviceName }) => {
  return (
    <nav className="p-4 mb-3">
      <div className="d-flex justify-content-between">
        <Link className="mr-5" to="/">
          <img src={Logo} alt="logo" width="100" />
        </Link>
        <h5 className="mr-auto">{serviceName}</h5>
        <span>User</span>
      </div>
    </nav>
  )
}
