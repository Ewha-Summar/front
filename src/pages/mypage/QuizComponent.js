import styled from "styled-components";

const Row=styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-right:20px;
margin-left:20px;
`
const Row2=styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
margin-right:20px;
margin-left:20px;
margin-top:15px;
`
const Content = styled.div`
height:50px;
    font-family: Lora;
    color:black;
    line-height: 20px;
    
    font-size: 13px;

   
`
const Content2 = styled.div`
    height:50px;
    font-family: Lora;
    color:black;
    font-weight:bold;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
 
    font-size: 13px;

`
const ContentRed = styled.div`
    color:red;

`
const ContentBlue = styled.div`
    color:blue;
`

const Wrapper = styled.div`
margin-top:30px;
  width:780px;
  height:70px;
  display:flex;
  border-radius:10px;
  display: flex;
  flex-direction: column;
  outline:none;
`

function QuizComponent({number,quizContent,correct,my_answer,correct_answer}){
    
    return(<Wrapper><Row><Content>
        {number}. {quizContent}</Content></Row>
        <Row2><Content2>
     <ContentRed> 맞은여부:{correct}&emsp; &emsp;</ContentRed> 내답안:{my_answer}&emsp; &emsp; <ContentBlue>정답:{correct_answer}</ContentBlue></Content2>
        </Row2></Wrapper>
    );
}

export default QuizComponent;