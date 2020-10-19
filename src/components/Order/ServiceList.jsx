import React from 'react'
import styled from 'styled-components'

import { NavBar } from './NavBar'
import { Sidebar } from './Sidebar'
import { useState } from 'react'
import { useEffect } from 'react'
import allService, { baseUrl } from '../../services/all'
import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'

const OrderCard = styled.div`
  border-radius: 15px;
`

export const ServiceList = () => {
  const [serviceList, setServiceList] = useState([])
  const { currentUser } = useContext(UserContext)

  useEffect(() => {
    if (currentUser) {
      allService.getOrdersByEmail(currentUser.email).then((orders) => {
        setServiceList(orders)
      })
    }
  }, [currentUser])

  return (
    <div>
      <NavBar serviceName="Service list" />
      <div className="row">
        <Sidebar />
        <div className="col-9">
          <div
            className="p-5"
            style={{ backgroundColor: '#F4F7FC', minHeight: '80vh' }}
          >
            <div className="row">
              {serviceList.map((service) => (
                <div key={service._id} className="col-sm-6">
                  <OrderCard className="p-3 bg-white">
                    <div className="d-flex justify-content-between mb-3">
                      <img
                        src={
                          service.serviceIcon.length > 15
                            ? service.serviceIcon
                            : `${baseUrl.replace('/api', '')}/${
                                service.serviceIcon
                              }`
                        }
                        alt="service 1"
                        width="50"
                      />
                      <button className="btn btn-danger">
                        {service.status}
                      </button>
                    </div>
                    <h2 className="text-weight-bold">{service.serviceTitle}</h2>
                    <p className="text-muted">{service.projectDetails}</p>
                  </OrderCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
