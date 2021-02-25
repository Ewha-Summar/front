import React from "react";
import styled from "styled-components";

const Title = styled.div`
    font-family: NanumGothic;
    color:#6A6A6A;
    font-size: 15px;
    width: ${(props) => props.width || 30}rem;
`

const TextComponent = ({title,width}) => { 


    return  <Title width={width}> {title} </Title>
}

export default TextComponent;