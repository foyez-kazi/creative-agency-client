import React from 'react'
import styled from 'styled-components'

import Carousel1 from '../../images/carousel-1.png'
import Carousel2 from '../../images/carousel-2.png'
import Carousel3 from '../../images/carousel-3.png'
import Carousel4 from '../../images/carousel-4.png'
import Carousel5 from '../../images/carousel-5.png'

const CarouselContainer = styled.div`
  background-color: #111430;
`

const PrimaryHeading = styled.h2`
  text-align: center;
  color: #fff;

  span {
    color: #7ab259;
  }

  .img-fluid {
    max-height: 250px !important;
  }
`

export const Carousel = () => {
  return (
    <CarouselContainer className="py-5">
      <PrimaryHeading className="mb-5">
        Here are some of <span>our works</span>
      </PrimaryHeading>

      <div className="container">
        <div id="gallery" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators" style={{ bottom: '-40px' }}>
            <li
              data-target="#gallery"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#gallery" data-slide-to="1"></li>
            <li data-target="#gallery" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col">
                  <img className="img-fluid" src={Carousel1} alt="Image 1" />
                </div>

                <div className="col">
                  <img className="img-fluid" src={Carousel2} alt="Image 2" />
                </div>

                <div className="col">
                  <img
                    style={{ maxHeight: '250px' }}
                    className="img-fluid"
                    src={Carousel3}
                    alt="Image 3"
                  />
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <img className="img-fluid" src={Carousel4} alt="Image 6" />
                </div>

                <div className="col">
                  <img className="img-fluid" src={Carousel5} alt="Image 7" />
                </div>
                <div className="col"></div>

                {/* <div className="col">
                  <img
                    className="img-fluid"
                    src="http://via.placeholder.com/800x450/f7b801/ffffff?text=Image+8"
                    alt="Image 8"
                  />
                </div> */}
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#gallery"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>

          <a
            className="carousel-control-next"
            href="#gallery"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </CarouselContainer>
  )
}
