import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import styled from 'styled-components'
import allService from '../../services/all'

import Slack from '../../images/logos/slack.png'
import Google from '../../images/logos/google.png'
import Uber from '../../images/logos/uber.png'
import Netflix from '../../images/logos/netflix.png'
import Airbnb from '../../images/logos/airbnb.png'

import { Button } from '../Button'
import { Services } from './Services'
import { Carousel } from './Carousel'

const SocialIconsContainer = styled.div`
  .social-icon {
    width: 80px;
  }
`

const PrimaryHeading = styled.h2`
  text-align: center;
  color: #737373;

  span {
    color: #7ab259;
  }
`

const ContactContainer = styled.div`
  background-color: #fbd062;
`

export const Home = () => {
  const [reviews, setReviews] = useState([])
  const [services, setServices] = useState([])

  useEffect(() => {
    allService.getReviews().then((reviews) => {
      setReviews(reviews)
    })

    allService.getServices().then((services) => {
      setServices(services)
    })
  }, [])

  return (
    <div>
      <Header />
      <SocialIconsContainer className="my-5">
        <div className="container">
          <div className="d-flex justify-content-around">
            <img className="social-icon" src={Slack} alt="slack logo" />
            <img className="social-icon" src={Google} alt="google logo" />
            <img className="social-icon" src={Uber} alt="uber logo" />
            <img className="social-icon" src={Netflix} alt="netflix logo" />
            <img className="social-icon" src={Airbnb} alt="airbnb logo" />
          </div>
        </div>
      </SocialIconsContainer>
      <Services services={services} />
      <Carousel />
      <div className="container mt-5">
        <PrimaryHeading>
          Clients <span>Feedback</span>
        </PrimaryHeading>

        <div className="row py-5">
          {reviews.slice(0, 3).map((review) => (
            <div key={review._id} className="col-md-4 mb-3">
              <div className="client-box border border-dark p-3">
                <div className="d-flex align-items-center mb-2">
                  <img
                    className="d-block mr-2"
                    src={review.userImage}
                    alt="customer 1"
                    width="50"
                  />
                  <div>
                    <h5>{review.userName}</h5>
                    <span>{review.companyName}</span>
                  </div>
                </div>
                <p>{review.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactContainer>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6  mb-3">
              <h3>Let us handle your project, professionally.</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                perspiciatis alias soluta minus, incidunt minima?
              </p>
            </div>
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name / company's name"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Your message"
                    rows="3"
                  ></textarea>
                </div>
                <Button>Send</Button>
              </form>
            </div>
          </div>
        </div>
        <p className="py-5 text-center mb-0">copyright Orange labs 2020</p>
      </ContactContainer>
      {/* <Link to="/private">Go to private Component</Link> */}
    </div>
  )
}
