import React from 'react'
import { NavBar } from './NavBar'
import { Sidebar } from './Sidebar'
import allService from '../../services/all'
import { useState } from 'react'

export const MakeAdmin = () => {
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
    const { value } = e.target
    setEmail(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    allService.createAdmin({ email }).then((savedAdmin) => {
      console.log(savedAdmin)
    })
  }

  return (
    <div>
      <NavBar serviceName="Make Admin" />
      <div className="row">
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
                    <label>Email</label>
                    <div className="d-flex align-items-center">
                      <input
                        type="text"
                        className="form-control mr-3"
                        placeholder="john@gmail.com"
                        name="email"
                        onChange={handleChange}
                      />
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
