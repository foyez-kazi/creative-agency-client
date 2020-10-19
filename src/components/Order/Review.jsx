import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'

import { UserContext } from '../../context/UserProvider'
import { Button } from '../Button'
import { NavBar } from './NavBar'
import { Sidebar } from './Sidebar'
import allService from '../../services/all'
import { useHistory } from 'react-router-dom'

export const Review = () => {
  const history = useHistory()
  const { currentUser } = useContext(UserContext)
  const [review, setReview] = useState({
    userName: '',
    userImage: '',
    companyName: '',
    description: '',
  })

  useEffect(() => {
    if (currentUser) {
      setReview({
        ...review,
        userImage: currentUser.photoURL,
      })
    }
  }, [currentUser])

  const handleChange = (e) => {
    const { name, value } = e.target
    setReview({ ...review, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    allService.createReview(review).then((savedReview) => {
      history.push('/')
    })
  }

  return (
    <div>
      <NavBar serviceName="Review" />
      <div className="row">
        <Sidebar />
        <div className="col-9">
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
                      placeholder="Your name"
                      name="userName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company's name, Designation"
                      name="companyName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Description"
                      rows="3"
                      name="description"
                      onChange={handleChange}
                    />
                  </div>
                  <Button>Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
