import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

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
  return (
    <SidebarContainer className="col-3 col-md-2 px-5">
      <NavLink
        activeClassName="nav-active"
        className="d-block mb-3"
        to="/admin/service-list"
      >
        Service list
      </NavLink>
      <NavLink
        activeClassName="nav-active"
        className="d-block mb-3"
        to="/admin/add-service"
      >
        Add Service
      </NavLink>
      <NavLink
        activeClassName="nav-active"
        className="d-block mb-3"
        to="/admin/make-admin"
      >
        Make Admin
      </NavLink>
    </SidebarContainer>
  )
}
