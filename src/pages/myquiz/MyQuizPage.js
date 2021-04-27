import { useEffect, useState } from "react";
import { getReviewQuiz, getMyQuiz } from "../../_actions/user_action"
import { useDispatch } from 'react-redux';
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header/Header"
import CardComponent from "./CardComponent"
import SummaryComponent from './SummaryComponent'
import Picture1 from '../../assets/mypage1.jpg'
import Picture2 from '../../assets/mypage2.jpg'
import BlankTop from "../../components/BlankTop"
import ScoreComponent from "./ScoreComponent"
import MyPageFooter from "../../components/footer/MyPageFooter"
import QuizComponent from "./QuizComponent";
import Button from "../../components/Button";

const Fix = styled.div`
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
const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-left:7%;
  justify-content: space-between;
  flex-wrap:wrap;
`
const Picture = styled.div`
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
    margin-left:50px;
    flex-wrap:wrap;
`
const ScoreWrapper = styled.div`
margin-top:100px;
  width:800px;
  height:1000px;
  display:flex;
  background:  rgba(239, 116, 111, 0.3);
  border-radius:10px;
  display: flex;
  flex-direction: column;
  z-index:1;
  outline:none;
`

const BlueScoreWrapper = styled.div`
margin-top:100px;
  width:800px;
  height:1000px;
  display:flex;
  background:  #10375C;
  border-radius:10px;
  display: flex;
  flex-direction: column;
  z-index:1;
  outline:none;
`
const White = styled.div`
margin-top:50px;
margin-left:20px;
  width:760px;
  height:930px;
  display:flex;
  background: white;
  border-radius:10px;
  display: flex;
  flex-direction: column;
  z-index:1;
  outline:none;
`

function MyQuizPage(match) {

  const [myState, setMyState] = useState({ status: 'idle', member: null });
  const [myScore, setMyScore] = useState({ status: 'idle', member: null });
  const [reviewScore, setReviewScore] = useState({ status: 'idle', member: null });
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getMyQuiz()).then(response => {
      setMyState({ status: 'pending' });
      const data = response.payload.data.quiz_list;
      setTimeout(() => setMyScore({ status: 'resolved', member: data }), 600);
    });
  }, []);

  useEffect(() => {
    dispatch(getReviewQuiz()).then(response => {
      setReviewScore({ status: 'pending' });
      const data = response.payload.data.quiz_list;
      setTimeout(() => setReviewScore({ status: 'resolved', member: data }), 600);
    });
  }, []);



  return (
    <div>
      <Fix>
        <Wrapper>
          <Header> </Header>

          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />

          <Content>
            <Title>Origin Test</Title>  <PinkTitle>Review Test</PinkTitle></Content>

          <Content>
            {myScore.member?.map((test, i) => <BlueScoreWrapper><White>
              <div>

                <ScoreComponent
                  bookTitle={test.book_title}
                  quizDate={test.quiz_date} />

                {test.quiz?.map((data, k) =>
                  <QuizComponent
                    number={k + 1}
                    quizContent={data.quiz_content}
                    correct={data.correct}
                    my_answer={data.my_answer}
                    correct_answer={data.correct_answer} />
                )}

              </div></White></BlueScoreWrapper>)}
            {reviewScore.member?.map((test, i) => <ScoreWrapper><White>
              <div>

                <ScoreComponent
                  bookTitle={test.book_title}
                  quizDate={test.quiz_date} />

                {test.quiz?.map((data, k) =>
                  <QuizComponent
                    number={k + 1}
                    quizContent={data.quiz_content}
                    correct={data.review_correct}
                    my_answer={data.review_answer}
                    correct_answer={data.correct_answer} />
                )}

              </div></White></ScoreWrapper>)}

          </Content>
          <BlankTop DesktopMargin='5' TabletMargin='3' MobileMargin='1' />
        </Wrapper>
      </Fix>
      <MyPageFooter /></div>
  );
};

export default MyQuizPage;
