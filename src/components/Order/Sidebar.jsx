import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../../context/UserProvider'
import { Logout } from '../Logout'
import allService from '../../services/all'

const SidebarContainer = styled.nav`
  a {
    text-decoration: none;
    color: inherit;
  }
  color: #c4c4c4;

  .nav-active {
    color: #8abf94;
  }
`

export const Sidebar = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const { currentUser } = useContext(UserContext)

  useEffect(() => {
    if (currentUser) {
      allService
        .checkAdmin({ email: currentUser.email })
        .then(({ isAdmin }) => {
          setIsAdmin(isAdmin)
        })
    }
  }, [currentUser])

  const admin = (
    <>
      <NavLink
        activeClassName="nav-active"
        className="d-block mb-3"
        to="/admin-service-list"
      >
        Service list
      </NavLink>
      <NavLink
        activeClassName="nav-active"
        className="d-block mb-3"
        to="/add-service"
      >
        Add Service
      </NavLink>
      <NavLink
        activeClassName="nav-active"
        className="d-block mb-3"
        to="/make-admin"
      >
        Make Admin
      </NavLink>
    </>
  )

  const customer = (
    <>
      <NavLink
        activeClassName="nav-active"
        className="d-block mb-3"
        to="/orders"
      >
        Order
      </NavLink>
      <NavLink
        activeClassName="nav-active"
        className="d-block mb-3"
        to="/service-list"
      >
        Service list
      </NavLink>
      <NavLink
        activeClassName="nav-active"
        className="d-block mb-3"
        to="/review"
      >
        Review
      </NavLink>
    </>
  )

  return (
    <SidebarContainer className="col-3 col-md-2 px-5">
      {isAdmin ? admin : customer}
      <Logout />
    </SidebarContainer>
  )
}
