import React from "react";
import styled from "styled-components";

const Title = styled.div`
    font-family: NanumGothic;
    color:#6A6A6A;
    font-size: 15px;
    width:30rem;
`

const TextComponent = ({title}) => { 


    return  <Title> {title} </Title>
}

export default TextComponent;