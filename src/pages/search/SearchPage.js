import { useEffect, useState } from "react";
import TextComponent from "../../components/TextComponent";
import styled from "styled-components";
import Header from "../../components/header/Header"
import BlankTop from "../../components/BlankTop"
import Button from "../../components/Button";
import CardComponent from "./CardComponent";
import SearchFooter from "../../components/footer/SearchFooter"
import { Card } from "antd";

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
const PinkTitle = styled.div`
    font-family: Lora;
    color:#EF746F;
    width:45rem;
    line-height: 10px;
    font-weight:bold;
    font-size: 40px;
`
const Content=styled.div`
  display: flex;
  flex-direction: row;
  margin-left:7%;
  justify-content: space-between;
`
const Input = styled.input`
    font-family: NanumGothic;
    color:#000000;
    line-height: 9px;
    font-size: 13px;
    overflow-wrap:"auto";
    width:1400px;
    height:70px;
    border: 1px solid #EF746F;
    border-radius:10px;
    outline:none;
       
`

const SearchPage = (match) => {

  return (
    <div>
    <Fix>
        <Wrapper>
            <Header></Header>
            <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' /> 
            <Content>
            <PinkTitle>Summary Search</PinkTitle>
            <TextComponent title='요약문을 검색해보세요!' />
            <TextComponent title='' /> <TextComponent title='' /> <TextComponent title='' />
            </Content>
            <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' /> 
            <Content>
            <Input placeholder="Input your text here." ></Input>
            <Button  margin={'25'} color={'white'} background={'#EF746F'} type="submit"> &emsp; &emsp;&emsp; &emsp; Search &emsp;&emsp;&emsp; &emsp; </Button>
            </Content>
            <Content>
              <CardComponent /><CardComponent />
            </Content> 
            <Content>
              <CardComponent /><CardComponent />
            </Content> 
            <Content>
              <CardComponent /><CardComponent />
            </Content> 
            <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' /> 
        </Wrapper>
    </Fix>
    <SearchFooter></SearchFooter></div>
  );
};

export default SearchPage;
