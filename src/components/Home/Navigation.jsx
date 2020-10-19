import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserProvider'
import Logo from '../../images/logos/logo.png'
import { Button } from '../Button'

export const Navigation = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <nav className="navbar navbar-expand-sm navbar-light mb-5">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" width="100" />
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3">
              <Link
                style={{ borderBottom: '3px solid #7AB259' }}
                className="nav-link"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link" to="/">
                Our Portfolio
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link" to="/">
                Our Team
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link" to="/">
                Contact Us
              </Link>
            </li>
            {!currentUser && (
              <li className="nav-item">
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
