import React from 'react'
import { Navigation } from './Navigation'
import styled from 'styled-components'

import { Button } from '../Button'
import Frame from '../../images/Frame.png'

const HeaderContainer = styled.div`
  background-color: #fbd062;

  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    height: 95vh;
  }
`

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <Navigation />
        <div className="row d-flex align-items-center">
          <div className="col-md-5 offset-md-1 mb-3">
            <h1>Let's Grow Your Brand To The Next Level</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              debitis inventore nulla! Distinctio, ipsam alias?
            </p>
            <Button>Hire Us</Button>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src={Frame} alt="header frame" />
          </div>
        </div>
      </div>
    </HeaderContainer>
  )
}
