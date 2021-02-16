import React, { useEffect, useState,Component } from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import BlankTop from "../../components/BlankTop";
import TextComponent from "../../components/TextComponent";
import {Radio,Checkbox,Form } from 'antd';
import Button from "../../components/Button";
import Footer from "../../components/footer/Footer_question";

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

class BlankPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions:[
        {question_no:"1", question_text:"Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company", answer:""},
        {question_no:"2", question_text:"Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company", answer:""},
        {question_no:"3", question_text:"Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company", answer:""},
        {question_no:"4", question_text:"Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company", answer:""}
      ],
      summary_result:"문제를 풀고 난 후 내용을 볼 수 있습니다."
    };
    this.onAnswerChange = this.onAnswerChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onAnswerChange(event){
    const { questions } = this.state;
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      questions: questions.map(
        question => question.question_no === name
        ? ({...question, answer:value})
        : question
      )
    });
  };

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state)
  }

  render(){
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
            <PinkBox><BlindText>{this.state.summary_result}</BlindText></PinkBox>
          </Content>
          <BlankTop DesktopMargin='5' TabletMargin='3' MobileMargin='1' /> 
          <form onSubmit={this.formSubmit}>
          <Content>
            <Title>Blank Quiz</Title>
            <TextComponent title="퀴즈를 풀어보세요!"/>
            <TextComponent title=""/> <TextComponent title=""/> <TextComponent title=""/>
          </Content>
          
          {this.state.questions.map((question, i)=>{
            return(
            <div>
            <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1'/>
            <Content>
              <GrayBox><QuestionNo>{i+1}</QuestionNo><Questiontext>{question.question_text}</Questiontext></GrayBox>
              <Input placeholder=" Input your answer." name={question.question_no} value={question.answer} onChange={this.onAnswerChange}></Input>
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
}

export default BlankPage;