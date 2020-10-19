import React from 'react'
import { useState } from 'react'
import { Button } from '../Button'
import { NavBar } from './NavBar'
import { Sidebar } from './Sidebar'
import allService from '../../services/all'
import { useHistory } from 'react-router-dom'

export const AddService = () => {
  const history = useHistory()
  const [service, setService] = useState({
    serviceTitle: '',
    description: '',
  })
  const [file, setFile] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setService({ ...service, [name]: value })
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('iconUrl', file)
    formData.append('serviceTitle', service.serviceTitle)
    formData.append('description', service.description)

    allService.createService(formData).then((savedService) => {
      history.push('/')
    })
  }

  return (
    <div>
      <NavBar serviceName="Add Services" />
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
                    <label>Service Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter title"
                      name="serviceTitle"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      placeholder="Description"
                      rows="3"
                      name="description"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Icon</label>
                    <input
                      onChange={handleFileChange}
                      type="file"
                      className="form-control-file"
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
