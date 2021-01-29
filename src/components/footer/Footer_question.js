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
            <Title> Wanna See Results?</Title>
            <Button onClick={() => history.push(`/mypage`)}> 마이페이지로 이동하기 </Button>
            </Detail>
            <Content>  <p style={{color:'white', fontSize:'13px'}}> 마이페이지에서 점수를 확인해보세요! </p> </Content>
            </Wrapper>
    );
};
 export default Footer;