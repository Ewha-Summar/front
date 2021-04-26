import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import Button from '../../components/Button'
import Logo from '../../assets/logo.png'
import { useDispatch } from "react-redux";
import { logoutUser } from "../../_actions/user_action";

const MyIcon = styled.img`
  width:350px;
`;

MyIcon.defaultProps = {
  src: Logo,
};

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

const Header = () => {
  const history = useHistory();
  const [myState, setMyState] = useState({ status: "idle", member: null });
  const dispatch = useDispatch();
  let user_id = window.localStorage.getItem("user_id");
  const LogOut = async (evt) => {
    window.localStorage.setItem("isAuth", "false");
    window.localStorage.setItem("name", "");
    window.localStorage.setItem("text", "");
    window.localStorage.setItem("summary_id", "");
    window.localStorage.setItem("jwt", "");
    window.localStorage.setItem("user_id", "");
    window.localStorage.setItem("summary", "");
    window.localStorage.setItem("score", "");
    dispatch(logoutUser());
    setMyState({ status: "pending" });
    setTimeout(() => setMyState({ status: "resolved", member: null }), 600);
  };
  switch (window.localStorage?.getItem("isAuth")) {
    case "false":
      return (
        <Detail>
          <Link to="/">
            <MyIcon></MyIcon> </Link>
          <Button font='15' onClick={() => history.push(`/summarize`)}> <p style={{ fontWeight: 'bold' }}>문서요약 </p></Button>
          <Button font='15' onClick={() => history.push(`/blank`)}> <p style={{ fontWeight: 'bold' }}>빈칸문제 </p></Button>
          <Button font='15' onClick={() => history.push(`retest`)}> <p style={{ fontWeight: 'bold' }}>오답노트 </p></Button>
          <Button font='15' onClick={() => history.push(`/search`)}><p style={{ fontWeight: 'bold' }}> 요약검색</p> </Button>
          <Button font='15' onClick={() => history.push(`/ai`)}><p style={{ fontWeight: 'bold' }}> AI 질의응답</p> </Button>
          <Button font='15' onClick={() => history.push(`/mypage`)}> <p style={{ fontWeight: 'bold' }}>나의 요약</p> </Button>
          <Button font='15' onClick={() => history.push(`/myquiz`)}> <p style={{ fontWeight: 'bold' }}>나의 문제</p> </Button>
          <div></div><div></div><div></div>
          <Button font='15' background='whitegray' onClick={() => history.push(`/login`)} > Log In </Button>
          <Button font='15' color='white' background='#10375C' onClick={() => history.push(`/register`)} >&nbsp;&nbsp;Sign Up&nbsp;&nbsp;</Button>
        </Detail>
      );
    case null:
      return (
        <Detail>
          <Link to="/">
            <MyIcon></MyIcon> </Link>
          <Button font='15' onClick={() => history.push(`/summarize`)}> <p style={{ fontWeight: 'bold' }}>문서요약 </p></Button>
          <Button font='15' onClick={() => history.push(`/blank`)}> <p style={{ fontWeight: 'bold' }}>빈칸문제 </p></Button>
          <Button font='15' onClick={() => history.push(`retest`)}> <p style={{ fontWeight: 'bold' }}>오답노트 </p></Button>
          <Button font='15' onClick={() => history.push(`/search`)}><p style={{ fontWeight: 'bold' }}> 요약검색</p> </Button>
          <Button font='15' onClick={() => history.push(`/ai`)}><p style={{ fontWeight: 'bold' }}> AI 질의응답</p> </Button>
          <Button font='15' onClick={() => history.push(`/mypage`)}> <p style={{ fontWeight: 'bold' }}>나의 요약</p> </Button>
          <Button font='15' onClick={() => history.push(`/myquiz`)}> <p style={{ fontWeight: 'bold' }}>나의 문제</p> </Button>
          <div></div><div></div><div></div>
          <Button font='15' background='whitegray' onClick={() => history.push(`/login`)} > Log In </Button>
          <Button font='15' color='white' background='#10375C' onClick={() => history.push(`/register`)} >&nbsp;&nbsp;Sign Up&nbsp;&nbsp;</Button>
        </Detail>
      );
    case "true":
      return (
        <Detail>
          <Link to="/">
            <MyIcon></MyIcon> </Link>
          <Button font='15' onClick={() => history.push(`/summarize`)}> <p style={{ fontWeight: 'bold' }}>문서요약 </p></Button>
          <Button font='15' onClick={() => history.push(`/blank`)}> <p style={{ fontWeight: 'bold' }}>빈칸문제 </p></Button>
          <Button font='15' onClick={() => history.push(`retest`)}> <p style={{ fontWeight: 'bold' }}>오답노트 </p></Button>
          <Button font='15' onClick={() => history.push(`/search`)}><p style={{ fontWeight: 'bold' }}> 요약검색</p> </Button>
          <Button font='15' onClick={() => history.push(`/ai`)}><p style={{ fontWeight: 'bold' }}> AI 질의응답</p> </Button>
          <Button font='15' onClick={() => history.push(`/mypage`)}> <p style={{ fontWeight: 'bold' }}>나의 요약</p> </Button>
          <Button font='15' onClick={() => history.push(`/myquiz`)}> <p style={{ fontWeight: 'bold' }}>나의 문제</p> </Button>
          <div></div><div></div><div></div>
          <Button font='15' background='whitegray' onClick={LogOut} > Log Out </Button>
          <div>
            <p style={{ fontWeight: 'bold' }}> {user_id}님 </p> <p style={{ fontWeight: 'bold' }}>환영합니다. </p></div>
        </Detail>
      );
  }
};
export default Header;