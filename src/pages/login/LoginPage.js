import { useEffect, useState } from "react";
import styled from "styled-components";
import BlankTop from '../../components/BlankTop'
import Button from '../../components/Button'
import TextComponent from '../../components/TextComponent'
import Logo from '../../assets/logo.png'
import Header from '../../components/header/Header'

const Fix =styled.div`
min-height:100vh;
background-color:  #ffffff;
`;
const Wrapper = styled.div`
  width:110rem;
  height: 100%;
  padding:30px;
  display: flex;
  flex-direction: column;

  margin: 10 auto;
`
const MyIcon = styled.img`
  width:400px;
`;

MyIcon.defaultProps = {
  src: Logo,
};

const Detail=styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`
const Column=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Content=styled.div`
  display: flex;
  flex-direction: row;
  margin-left:7%;
  justify-content: space-between;
`


const Title = styled.div`
    font-family: Lora;
    color:#10375C;
    width:50rem;
    line-height: 10px;
    font-weight:bold;
    font-size: 50px;
`

const LoginPage = (match) => {

  return (
    <>
    <Fix>
        <Wrapper>
           <Header></Header>
            
      </Wrapper>
      </Fix>
    </>
  );
};

export default LoginPage;
