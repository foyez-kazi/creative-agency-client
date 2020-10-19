import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { baseUrl } from '../../services/all'

const ServiceContainer = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }

  h2 {
    color: #111430;
    font-weight: bold;
  }

  .service-icon {
    width: 60px;
  }

  .service {
    transition: 0.2s box-shadow;
  }

  .service:hover {
    box-shadow: 0px 3px 23px rgba(0, 0, 0, 0.5);
  }
`

const PrimaryHeading = styled.h2`
  text-align: center;
  color: #737373;

  span {
    color: #7ab259;
  }
`

export const Services = ({ services }) => {
  return (
    <div className="container">
      <PrimaryHeading>
        Provide awesome <span>Services</span>
      </PrimaryHeading>
      <ServiceContainer className="row py-5">
        {services.slice(0, 3).map((service, index) => (
          <div key={service._id} className="col-md-4 mb-3">
            <Link
              to={`/orders?service=${encodeURIComponent(service.serviceTitle)}`}
            >
              <div className={`text-center p-4 service`}>
                <div className="mb-2">
                  <img
                    className="service-icon"
                    src={
                      service.iconUrl.length > 15
                        ? service.iconUrl
                        : `${baseUrl.replace('/api', '')}/${service.iconUrl}`
                    }
                    alt="service 1"
                  />
                </div>
                <h2>{service.serviceTitle}</h2>
                <p className="text-muted">{service.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </ServiceContainer>
    </div>
  )
}
