import { useEffect, useState } from "react";
import styled from "styled-components";
import BlankTop from '../../components/BlankTop'
import TextComponent from '../../components/TextComponent'
import Logo from '../../assets/logo.png'
import Picture from '../../assets/main.jpg'
import CardComponent from './CardComponent'
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

const MainPage = (match) => {

  return (
    <>
    <Fix>
        <Wrapper>
           <Header></Header>
            <Content>
                <Detail>
            <Title> <p  style={{ color: '#EF746F'  }} >Query-intensive  </p> learning help services  <p/>through document summaries</Title>
            <Column>
            <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />        
            <TextComponent title="저희 Summar에서는 사용자의 텍스트를 입력받아"/>
            <TextComponent title=" 요약해주는 서비스를 제공합니다."/>   
            <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />
            <TextComponent title="또한, 사용자의 텍스트를 기반으로 한 o,x문제와 빈칸문제가"/>
            <TextComponent title=" 자동생성되어 문제를 풀 수 있는 학습서비스가 제공됩니다."/>
            </Column><div></div> </Detail>
            </Content>
            <BlankTop DesktopMargin='5' TabletMargin='3' MobileMargin='1' />
            <Content>
            <CardComponent></CardComponent>
            <TextComponent title=""/>
                <img src={Picture} />
            </Content>
      </Wrapper>
      </Fix>
    </>
  );
};

export default MainPage;
