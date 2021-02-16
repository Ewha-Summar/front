import { useEffect, useState } from "react";
import {  useHistory,Link } from "react-router-dom";
import styled from "styled-components";
import Button from '../../components/Button'
import Logo from '../../assets/logo.png'

const MyIcon = styled.img`
  width:350px;
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

const Header=()=>{
  const history=useHistory();
    return(
        <Detail>
          <Link to="/">
            <MyIcon></MyIcon> </Link>
            <Button font='15' onClick={() => history.push(`/summarize`)}> <p style={{fontWeight:'bold'}}>문서요약 </p></Button>
            <Button font='15'onClick={() => history.push(`/blank`)}> <p style={{fontWeight:'bold'}}>빈칸문제 </p></Button>
            <Button font='15'onClick={() => history.push(`/search`)}><p style={{fontWeight:'bold'}}> 요약검색</p> </Button>
            <Button font='15'onClick={() => history.push(`/ai`)}><p style={{fontWeight:'bold'}}> AI 질의응답</p> </Button>
            <Button font='15'onClick={() => history.push(`/mypage`)}> <p style={{fontWeight:'bold'}}>마이페이지</p> </Button>
            <div></div><div></div><div></div>
            <Button font='15'  background='whitegray' onClick={() => history.push(`/login`)} > Log In </Button>
            <Button font='15' color='white' background='#10375C' onClick={() => history.push(`/register`)} >&nbsp;&nbsp;Sign Up&nbsp;&nbsp;</Button>
            </Detail>
    );
};
 export default Header;