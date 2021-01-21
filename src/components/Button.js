import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
 margin-top:50px;
  height:  30px ;
  width: ${(props) => props.color || 100}px ;
  border: 1px solid ${(props) => props.border|| "rgba( 255, 255, 255, 0 )"};
  color: ${(props) => props.color || "black"};
  background: ${(props) => props.background || "rgba( 255, 255, 255, 0 )"};
  font-size: solid ${props=> props.font || 0}px;
  padding-right:5px;
`

function Button({ children, border, color, background, font, width }) {
  return (
    <StyledButton border={border} color={color} background={background} font={font} width={width} >
      {children}
    </StyledButton>
  )
}
export default Button;