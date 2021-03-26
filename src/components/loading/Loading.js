import React from 'react';
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
margin: 0 auto;
padding: 20px;
max-width: 1200px;
font-family: "Open Sans", sans-serif;
font-weight: 400;
-webkit-font-smoothing: antialiased;
-webkit-text-size-adjust: 100%;
-ms-text-size-adjust: 100%;
`
const LoadWrapp = styled.div`
  float: left;
  width: 200px;
  height: 100px;
  margin: 0 10px 10px 0;
  padding: 20px 20px 20px;
  border-radius: 5px;
  text-align: center;
`
const BounceAnimation = keyframes`
  0 {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const Line1 = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #4b9cdb;
  animation: ${BounceAnimation} 0.6s 0.1s linear infinite
`
const Line2 = styled.div`
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: #4b9cdb;
    animation: ${BounceAnimation} 0.6s 0.2s linear infinite
`
const Line3 = styled.div`
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: #4b9cdb;
    animation: ${BounceAnimation} 0.6s 0.3s linear infinite
`

function Loading ({}) {
    return(
        <Wrapper>
        <LoadWrapp>
            <p>문제를 생성중입니다</p>
            <Line1></Line1> &nbsp;
            <Line2></Line2> &nbsp;
            <Line3></Line3>
        </LoadWrapp>
        </Wrapper>
    );
}

export default Loading;