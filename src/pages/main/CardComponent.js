import React from "react"
import styled from "styled-components"
import BlankTop from '../../components/BlankTop'
import Button from '../../components/Button'
import {  useHistory,Link } from "react-router-dom";

const Wrapper = styled.div`
margin-top:50px;
  width:650px;
  height:500px;
  margin: 10 auto;
  display:flex;
  background-color: #10375C;
  position: absolute;
  z-index:10;
  margin-left:50px;
`
const Title = styled.div`
    color:#ffffff;
    font-size:  20px;

`
const Column=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  padding-left:10%;
`
const Input = styled.input`
    font-family: NanumGothic;
    color:#ffffff;
    line-height: 9px;
    font-size: 13px;
    border:0px solid;
    overflow-wrap:"auto";
    background-color: #0D2C4A;
    width:500px;
    height:300px;
    outline:none;
`

const CardComponent = ({title}) => { 
  const history=useHistory();

    return(
    <>
    <Wrapper>
        <Column>
        <BlankTop DesktopMargin='1' TabletMargin='1' MobileMargin='1' /> 
        <Title> 요약하고싶은 텍스트를 입력하세요. </Title>
        <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />      
        <Input placeholder="Enter your Text."></Input>
        <Button font='12' color='white' background='#EF746F' width='100'onClick={() => history.push(`/summarize`)} > &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; Summarize Your Text &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  </Button>
        <BlankTop DesktopMargin='1' TabletMargin='1' MobileMargin='1' /> 
        </Column>
        </Wrapper></> 
        );
}

export default CardComponent;