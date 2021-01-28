import SizeContext from "antd/lib/config-provider/SizeContext";
import { useEffect, useState } from "react";
import {  useHistory } from "react-router-dom";
import styled from "styled-components";


const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height:250px;
  background-color:#10375C;
`
const Title = styled.div`
    font-family: Lora;
    color:#ffffff;
    width:45rem;
    line-height: 10px;
    font-weight:bold;
    font-size: 40px;
    margin-right:400px;
`
const Detail=styled.div`
  display: flex;
  flex-direction: row;
  margin-left:3%;
  margin-top:100px;
  justify-content: space-between;
`
const Content=styled.div`
 display: flex;
  flex-direction: row;
  margin-left:3%;
  justify-content: space-between;
`
const Button = styled.button`
  height:  50px ;
  width:300px ;
  color: "black";
  border:0px solid;
  background: "white";
  font-size: solid ${props=> props.font || 0}px;
  padding-right:20px;
  outline:none;
  margin-right:50px;
  border-radius:10px;
`
const Footer=()=>{
  const history=useHistory();
    return(
        <Wrapper>
        <Detail>
            <Title> Wanna Study More?</Title>
            <Button onClick={() => history.push(`/oxpage`)}> O,X 문제 풀어보러가기 </Button>
            <Button onClick={() => history.push(`/blank`)}> 빈칸 문제 풀어보러가기 </Button>
            </Detail>
            <Content>  <p style={{color:'white', fontSize:'13px'}}> 방금 전 입력했던 문장을 학습해 보는건 어떨까요? </p> </Content>
            </Wrapper>
    );
};
 export default Footer;