import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
  background-color: #111430;
  border: #111430;
  padding: 10px 40px;
  color: white;
`

export const Button = ({ children }) => {
  return <ButtonContainer className="btn btn-lg">{children}</ButtonContainer>
}
