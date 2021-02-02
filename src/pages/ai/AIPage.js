import { useEffect, useState,Component } from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import BlankTop from "../../components/BlankTop";
import TextComponent from "../../components/TextComponent";
import {Radio,Checkbox,Form, AutoComplete } from 'antd';
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

const GrayBox = styled.div`
  width: 1230px;
  height:105px;
  display:flex;
  z-index:1;
  outline:none;
  background-color: #DFDFDF
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
  font-siz:16px;
  align-items: center;
  padding-right: 20px;
`

const Input = styled.input`
    font-family: NanumGothic;
    color:#000000;
    line-height : 20px;
    font-size: 16px;
    overflow-wrap:"auto";
    width:1200px;
    height: 50px;
    border: 1px solid #10375C;
    border-radius:5px;
    outline:none;
    margin: 20px 0px;
`

const StyledButton = styled.button`
  margin:auto;
  height:  50px ;
  width: 300px ;
  border: 1px solid ${(props) => props.border|| "rgba( 255, 255, 255, 0 )"};
  color: ${(props) => props.color || "black"};
  background: ${(props) => props.background || "rgba( 255, 255, 255, 0 )"};
  font-size: solid ${props=> props.font || 0}px;
  padding-right:5px;
  outline:none;
  border-radius: 5px;
`
function Button({ children, border, color, background, font, width,...rest  }) {
    return (
      <StyledButton border={border} color={color} background={background} font={font} width={width} {...rest}>
        {children}
      </StyledButton>
    )
  }

class AIPage extends Component {
  constructor(){
    super();
    this.state = {
      answer1:"",
      answer2:"",
      answer3:"",
      answer4:""
    };
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onCountChange=this.onCountChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onTypeChange(event) {
    this.setState({
      type: event.target.value
    });
  }

  onCountChange(event) {
    this.setState({
      count: event.target.value
    });
  }


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
            <PinkBox></PinkBox>
          </Content>
          <BlankTop DesktopMargin='5' TabletMargin='3' MobileMargin='1' /> 
          <form onSubmit={this.formSubmit}>
          <Content>
            <Title>AI Question</Title>
          </Content>
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1'/>
          <Content>
            <Input placeholder =" Input your text here."/>
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



export default AIPage;