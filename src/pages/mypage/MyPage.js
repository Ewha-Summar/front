import { useEffect, useState } from "react";
import {getMySummary} from "../../_actions/user_action"
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import Header from "../../components/header/Header"
import CardComponent from "./CardComponent"
import SummaryComponent from './SummaryComponent'
import Picture1 from '../../assets/mypage1.jpg'
import Picture2 from '../../assets/mypage2.jpg'
import BlankTop from "../../components/BlankTop"
import ScoreComponent from "./ScoreComponent"
import MyPageFooter from "../../components/footer/MyPageFooter"
import axios from "axios"

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

const [myState, setMyState] =useState({status: 'idle', member:null});
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(getMySummary()).then(response => {
    setMyState({status:'pending'});
    const data=response.payload.data;
    console.log(data);
    setTimeout(() => setMyState({ status: 'resolved' , member:data}), 600);
     });
},[]);
console.log(myState);

  return (
    <div>
    <Fix>
        <Wrapper>
            <Header> </Header>
            <Content>
            <CardComponent nickname={window.localStorage.getItem('name')} email={window.localStorage.getItem('user_id')} />
            <Picture><img src={Picture2} /><img src={Picture1} /></Picture>
            </Content>
            <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' /> 
            <Content>
            <Title>Recent Summaries</Title></Content>
            <Content>
              {myState.member?.summary_result.map((summary,i)=>
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
