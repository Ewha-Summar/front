import React, { useEffect, useState, setState } from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import BlankTop from "../../components/BlankTop";
import TextComponent from "../../components/TextComponent";
import {Radio,Checkbox,Form } from 'antd';
import Button from "../../components/Button";
import Footer from "../../components/footer/Footer_question";
import {useDispatch} from 'react-redux';
import {getQuiz, sendAnswer} from "../../_actions/user_action";

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
`
const Title = styled.div`
    font-family: Lora;
    color:#10375C;
    width:45rem;
    line-height: 10px;
    font-weight:bold;
    font-size: 40px;
`

const PinkBox = styled.div`
  width:1700px;
  height:220px;
  display:flex;
  border: 1px solid #EF746F;
  border-radius:10px;
  z-index:1;
  outline:none;
`
const PinkTitle = styled.div`
    font-family: Lora;
    color:#EF746F;
    width:45rem;
    line-height: 10px;
    font-weight:bold;
    font-size: 40px;
`
const BlindText = styled.div`
    font-family: NanumGothic;
    color:#6A6A6A;
    font-size: 15px;
    width:1700px;
    height:220px;
    display:flex;
    justify-content: center;
    align-items: center;
`

const GrayBox = styled.div`
  width: 1230px;
  height:105px;
  display:flex;
  z-index:1;
  outline:none;
  background-color: #DFDFDF;
`

const QuestionNo = styled.div`
  padding: 18px 80px 0px;
  display: flex;
  z-index:5;
  outline:none;
  justify-content: center;
  font-family:Raleway;
  font-size:24px;
`

const Questiontext = styled.div`
  padding: auto 80px;
  z-index: 5;
  display: flex;
  outline:none;
  font-family:Roboto;
  font-size:16px;
  align-items: center;
  padding-right: 20px;
`

const Input = styled.input`
    font-family: NanumGothic;
    color:#000000;
    line-height : 20px;
    font-size: 16px;
    overflow-wrap:"auto";
    width:270px;
    height: 40px;
    border: 1px solid #10375C;
    border-radius:5px;
    outline:none;
    margin: auto;
`

function BlankPage({}){
  const [questions, setQuestions] = useState({
    isSet: false,
    quiz:[],
  })

  const [answers, setAnswers] = useState({
    summary_id:Number(window.localStorage.getItem("summary_id")),
    quiz_list: [],
    new_list:[]
  })
  const [post,setPost]=useState('');
  const [reply,setReply]=useState({
    summary_id:Number(window.localStorage.getItem("summary_id")),
  quiz_list: []
    
  });

  const dispatch = useDispatch();

  const getQuizList = async response => {
    setQuestions({
      isSet: true,
      quiz: response.payload.data.quiz_list.map(question =>
        ({...question, my_answer:''})
      )
    });
    setAnswers({
      ...answers,
      quiz_list: response.payload.data.quiz_list.map(question =>
        ({quiz_id:question.quiz_id, my_answer:''})
    )
    });
  }

  useEffect (() => {
      dispatch(getQuiz(0, Number(window.localStorage.getItem("summary_id"))))
      .then (response => {
        if (response.payload.success){ 
          if (!questions.isSet){
            getQuizList(response);
          }
          console.log(questions);
        }
        else{
          console.log("error");
        }
      })
  },[questions, answers]);

  const onAnswerChange = async (event) => {
    const { name, value } = event.target;

        setPost(
          
          {...post,[name]:{my_answer:value,quiz_id:Number(name)}})

  };

  const formSubmit= async evt =>  {
    evt.preventDefault();
    answers.quiz_list.map((question) => {
      Number(question.quiz_id)===Number(post[question.quiz_id].quiz_id)?
      setReply({
        quiz_list:reply.quiz_list.push(post[question.quiz_id])
    })
    :console.log("error");
  });
    console.log("answer",answers)
    console.log("questions",questions)
    console.log("reply",reply)
    console.log("post",post)
    dispatch(sendAnswer(reply))
            .then(response => {
              if (response.payload.success) {
                console.log("sucess");
              } else {
                console.log("error");
              }
            })
  }

    return (
    <div>
      <Fix>
        <Wrapper>
          <Header />

          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1'/>
          <Content>
            <PinkTitle>Summary Result</PinkTitle>
            <TextComponent title="요약된 결과를 확인하세요!"/>
            <TextComponent title="" />  <TextComponent title="" />  <TextComponent title="" /> 
          </Content>
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1'/>
          <Content>
            <PinkBox><BlindText>{}</BlindText></PinkBox>
          </Content>
          <BlankTop DesktopMargin='5' TabletMargin='3' MobileMargin='1' /> 
          <form onSubmit={formSubmit}>
          <Content>
            <Title>Blank Quiz</Title>
            <TextComponent title="퀴즈를 풀어보세요!"/>
            <TextComponent title=""/> <TextComponent title=""/> <TextComponent title=""/>
          </Content>
          {questions.quiz.map((quiz, i)=>{
            return(
            <div>
            <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1'/>
            <Content>
              <GrayBox><QuestionNo>{i+1}</QuestionNo><Questiontext>{quiz.content}</Questiontext></GrayBox>
              <Input placeholder=" Input your answer." key={quiz.quiz_id} name={quiz.quiz_id} value={questions.quiz.quiz_id} onChange={onAnswerChange}></Input>
            </Content>
            </div>
            );
          })}
          <Content>
            <TextComponent title="" />
            <Button  color={'white'} background={'#10375C'} type="submit"> &emsp; &emsp; Submit &emsp;&emsp; </Button>
          </Content>
          </form>
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />
        </Wrapper>
      </Fix>
      <Footer></Footer>
    </div>
    );
 }


export default BlankPage;