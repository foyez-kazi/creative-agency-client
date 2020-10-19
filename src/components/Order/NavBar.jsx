import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserProvider'

import Logo from '../../images/logos/logo.png'

export const NavBar = ({ serviceName }) => {
  const { currentUser } = useContext(UserContext)

  return (
    <nav className="p-4 mb-3">
      <div className="d-flex justify-content-between">
        <Link className="mr-5" to="/">
          <img src={Logo} alt="logo" width="100" />
        </Link>
        <span className="mr-auto">{serviceName}</span>
        {currentUser && <span>{currentUser.displayName}</span>}
      </div>
    </nav>
  )
}
