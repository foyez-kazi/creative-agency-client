import React from 'react'

export const CustomerServiceList = () => {
  return (
    <div className="row">
      {serviceList.map((service) => (
        <div key={service._id} className="col-sm-6">
          <OrderCard className="p-3 bg-white">
            <div className="d-flex justify-content-between mb-3">
              <img
                src={
                  service.serviceIcon.length > 15
                    ? service.serviceIcon
                    : `${baseUrl.replace('/api', '')}/${service.serviceIcon}`
                }
                alt="service 1"
                width="50"
              />
              <button className="btn btn-danger">{service.status}</button>
            </div>
            <h2 className="text-weight-bold">{service.serviceTitle}</h2>
            <p className="text-muted">{service.projectDetails}</p>
          </OrderCard>
        </div>
      ))}
    </div>
  )
}
