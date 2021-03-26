import styled from "styled-components";
import Button from "../../components/Button"
import QuizComponent from "./QuizComponent"

const Wrapper = styled.div`

  width:800px;
  height:70px;
  display:flex;
  border:  rgba(239, 116, 111, 0.5);
  border-radius:10px;
  display: flex;
  flex-direction: column;
  outline:none;
`
const White = styled.div`
margin-top:100px;
margin-left:20px;
  width:760px;
  height:150px;
  display:flex;
  background: white;
  border-radius:10px;
  display: flex;
  flex-direction: column;
  z-index:1;
  outline:none;
`


const Title = styled.div`
margin-top:30px;

    font-family: Lora;
    color:#10375C;

    line-height: 10px;
    font-weight:bold;
    font-size: 20px;
    margin-bottom:10px;
`
const Content = styled.div`
margin-top:20px;
    font-family: Lora;
    color:gray;
    line-height: 15px;
    font-weight:bold;
    font-size: 13px;
    margin-bottom:10px;
`
const Author = styled.div`
display: flex;
  flex-direction: row;
  justify-content:flex-end;
  margin-right:50px;
  font-weight:bold;

`


const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right:20px;
  margin-left:20px;
`

function SummaryComponent({ bookTitle, QuizComponent, quizDate }) {

  return (
    <Wrapper>
      <Row>
        <Title> {bookTitle}</Title></Row>
      <Author>제출한 날짜: {quizDate}</Author>
      {QuizComponent}

    </Wrapper>
  );
}

export default SummaryComponent;