import { useEffect, useState } from "react";
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
    return(
        <Detail>
            <MyIcon></MyIcon>
            <Button font='15'> 문서요약 </Button>
            <Button font='15'> o,x 문제 </Button>
            <Button font='15'> 빈칸문제 </Button>
            <Button font='15'> 요약검색 </Button>
            <Button font='15'> AI 질의응답 </Button>
            <Button font='15'> 마이페이지 </Button>
            <div></div><div></div><div></div>
            <Button font='15'> Log In </Button>
            <Button font='15' color='white' background='#10375C'> &nbsp;&nbsp;Sign Up&nbsp;&nbsp; </Button>
            </Detail>
    );
};
 export default Header;