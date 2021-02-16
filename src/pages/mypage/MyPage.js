import { useEffect, useState } from "react";

import styled from "styled-components";
import Header from "../../components/header/Header"
import CardComponent from "./CardComponent"
import SummaryComponent from './SummaryComponent'
import Picture1 from '../../assets/mypage1.jpg'
import Picture2 from '../../assets/mypage2.jpg'
import BlankTop from "../../components/BlankTop"
import ScoreComponent from "./ScoreComponent"
import MyPageFooter from "../../components/footer/MyPageFooter"

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
const Content=styled.div`
  display: flex;
  flex-direction: row;
  margin-left:7%;
  justify-content: space-between;
  flex-wrap:wrap;
`
const Picture=styled.div`
  display: flex;
  flex-direction: row;
`
const Title = styled.div`
    font-family: Lora;
    color:#10375C;
    width:45rem;
    line-height: 10px;
    font-weight:bold;
    font-size: 40px;
`
const PinkTitle = styled.div`
    font-family: Lora;
    color:#EF746F;
    width:45rem;
    line-height: 10px;
    font-weight:bold;
    font-size: 40px;
`

function MyPage(match){

  let summaryData = {
    "user_id": "사용자",
    "summary_result": [
    {
        "summary_id" : 1,
        "summary_title" : "요약1 제목",
        "content" : "요약1 내용",
        "book_title" : "책1 제목",
        "book_author" : "책1 저자"
    },
    {
        "summary_id" : 2,
        "summary_title" : "요약2 제목",
        "content" : "요약2 내용",
        "book_title" : "책2 제목",
        "book_author" : "책2 저자"
    },
    {
      "summary_id" : 3,
      "summary_title" : "요약2 제목",
      "content" : "요약2 내용",
      "book_title" : "책2 제목",
      "book_author" : "책2 저자"
  },
  {
    "summary_id" : 4,
    "summary_title" : "요약2 제목",
    "content" : "요약2 내용",
    "book_title" : "책2 제목",
    "book_author" : "책2 저자"
},
{
  "summary_id" : 5,
  "summary_title" : "요약2 제목",
  "content" : "요약2 내용",
  "book_title" : "책2 제목",
  "book_author" : "책2 저자"
},
{
  "summary_id" : 6,
  "summary_title" : "요약2 제목",
  "content" : "요약2 내용",
  "book_title" : "책2 제목",
  "book_author" : "책2 저자"
},
{
  "summary_id" : 7,
  "summary_title" : "요약2 제목",
  "content" : "요약2 내용",
  "book_title" : "책2 제목",
  "book_author" : "책2 저자"
},
{
  "summary_id" : 8,
  "summary_title" : "요약2 제목",
  "content" : "요약2 내용",
  "book_title" : "책2 제목",
  "book_author" : "책2 저자"
},
{
  "summary_id" : 9,
  "summary_title" : "요약2 제목",
  "content" : "요약2 내용",
  "book_title" : "책2 제목",
  "book_author" : "책2 저자"
}
    ]
}            




 //let summaryData=axios.get(`${USER_SERVER}/userSummary`, {
  //headers: {
  //    jwt: window.localStorage.getItem('jwt') //the token is a variable which holds the token'
  //  }
  // }) 

  return (
    <div>
    <Fix>
        <Wrapper>
            <Header> </Header>
            <Content>
            <CardComponent nickname={"정아연"} email={"ribbon0529@naver.com"} />
            <Picture><img src={Picture2} /><img src={Picture1} /></Picture>
            </Content>
            <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' /> 
            <Content>
            <Title>Recent Summaries</Title></Content>
            <Content>
              {summaryData.summary_result.map((summary,i)=>
              <SummaryComponent 
              saveTitle={summary.summary_title}
              bookTitle={summary.book_title}
              bookContent={summary.content}
              bookAuthor={summary.book_author}
              />
              )}
            
            </Content>
            <BlankTop DesktopMargin='8' TabletMargin='3' MobileMargin='1' /> 
            <Content>
            <PinkTitle>Recent Test</PinkTitle></Content>
            <Content>
              <ScoreComponent
              testTitle={"Test Title"}
              testContent={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`}
              testScore={"2/3"}
              />
              <ScoreComponent
              testTitle={"Test Title"}
              testContent={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`}
              testScore={"2/3"}
              />
              <ScoreComponent
              testTitle={"Test Title"}
              testContent={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`}
              testScore={"2/3"}
              />
              <ScoreComponent
              testTitle={"Test Title"}
              testContent={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`}
              testScore={"2/3"}
              />
            </Content>
            <BlankTop DesktopMargin='5' TabletMargin='3' MobileMargin='1' /> 
        </Wrapper>
    </Fix>
    <MyPageFooter/></div>
  );
};

export default MyPage;
