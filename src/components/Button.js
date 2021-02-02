import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
 margin-top:${(props) => props.margin || 50}px;
  height:  30px ;
  width: ${(props) => props.color || 100}px ;
  border: 1px solid ${(props) => props.border|| "rgba( 255, 255, 255, 0 )"};
  color: ${(props) => props.color || "black"};
  background: ${(props) => props.background || "rgba( 255, 255, 255, 0 )"};
  font-size: solid ${props=> props.font || 0}px;
  font-weight: ${props=> props.weight || 'normal'};
  padding-right:5px;
  outline:none;
`

function Button({ children, border,margin, color,weight, background, font, width,...rest  }) {
  return (
    <StyledButton border={border} color={color} background={background} weight={weight}margin={margin} font={font} width={width} {...rest}>
      {children}
    </StyledButton>
  )
}
export default Button;