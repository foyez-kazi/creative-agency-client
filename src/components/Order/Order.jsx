import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Button } from '../Button'
import { NavBar } from './NavBar'
import { Sidebar } from './Sidebar'
import allService from '../../services/all'
import { UserContext } from '../../context/UserProvider'

export const Order = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const { currentUser } = useContext(UserContext)
  const [order, setOrder] = useState({
    userName: '',
    email: '',
    serviceTitle: '',
    projectDetails: '',
    price: '',
  })

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const serviceTitle = decodeURIComponent(params.get('service'))
  const history = useHistory()

  useEffect(() => {
    if (currentUser) {
      allService
        .checkAdmin({ email: currentUser.email })
        .then(({ isAdmin }) => {
          setIsAdmin(isAdmin)
        })
      setOrder({
        ...order,
        email: currentUser.email,
        serviceTitle: serviceTitle !== 'null' ? serviceTitle : '',
      })
    }
  }, [currentUser])

  const handleChange = (e) => {
    const { name, value } = e.target
    setOrder({ ...order, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    allService.createOrder(order).then((savedOrder) => {
      history.push(`${isAdmin ? 'admin-service-list' : 'service-list'}`)
    })
  }

  return (
    <div>
      <NavBar serviceName="Order" />
      <div className="row" style={{ margin: 'auto' }}>
        <Sidebar />
        <div className="col-9 col-md-10">
          <div
            className="p-5"
            style={{ backgroundColor: '#F4F7FC', minHeight: '80vh' }}
          >
            <div className="row">
              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name / company's name"
                      name="userName"
                      value={order.userName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email address"
                      name="email"
                      value={order.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Service title"
                      name="serviceTitle"
                      value={order.serviceTitle}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Project Details"
                      rows="3"
                      name="projectDetails"
                      value={order.projectDetails}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Price"
                      name="price"
                      value={order.price}
                      onChange={handleChange}
                    />
                  </div>
                  <Button>Send</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
