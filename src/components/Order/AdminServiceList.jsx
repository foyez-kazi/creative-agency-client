import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import allService from '../../services/all'
import { NavBar } from './NavBar'
import { Sidebar } from './Sidebar'

export const AdminServiceList = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    allService.getOrders().then((services) => {
      setServices(services)
    })
  }, [])

  const handleClick = (e, orderId) => {
    console.log(e.target.textContent)
    allService
      .updateOrderStatus(orderId, { status: e.target.textContent })
      .then((returnedOrder) => {
        setServices(
          services.map((service) =>
            service._id === orderId ? returnedOrder : service,
          ),
        )
      })
  }

  return (
    <div>
      <NavBar serviceName="Service List" />
      <div className="row">
        <Sidebar />
        <div className="col-9 col-md-10">
          <div
            className="p-5"
            style={{ backgroundColor: '#F4F7FC', minHeight: '80vh' }}
          >
            <div className="row">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Service</th>
                    <th scope="col">Project Details</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service._id}>
                      <td>{service.userName}</td>
                      <td>{service.email}</td>
                      <td>{service.serviceTitle}</td>
                      <td>{service.projectDetails}</td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn dropdown-toggle"
                            type="button"
                            id="dropdownMenu2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {service.status}
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenu2"
                          >
                            <button
                              onClick={(e) => handleClick(e, service._id)}
                              className="dropdown-item"
                              type="button"
                            >
                              Pending
                            </button>
                            <button
                              onClick={(e) => handleClick(e, service._id)}
                              className="dropdown-item"
                              type="button"
                            >
                              Ongoing
                            </button>
                            <button
                              onClick={(e) => handleClick(e, service._id)}
                              className="dropdown-item"
                              type="button"
                            >
                              Done
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
