import { useEffect, useState,Component } from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import BlankTop from "../../components/BlankTop";
import TextComponent from "../../components/TextComponent";
import {Radio,Checkbox,Form } from 'antd';
import Button from "../../components/Button";
import Footer from "../../components/footer/Footer";


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
const PinkTitle = styled.div`
    font-family: Lora;
    color:#EF746F;
    width:45rem;
    line-height: 10px;
    font-weight:bold;
    font-size: 40px;
`
const Input = styled.input`
    font-family: NanumGothic;
    color:#000000;
    line-height: 9px;
    font-size: 13px;
    overflow-wrap:"auto";
    width:1700px;
    height:220px;
    border: 1px solid #10375C;
    border-radius:10px;
    outline:none;
       
`
const Box = styled.div`
   width:500px;
  height:80px;
  display:flex;
  border: 1px solid #10375C;
  border-radius:10px;
  z-index:10;
  margin-right:200px;
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

class SummarizePage extends Component { 
  constructor() {
    super();
    this.state = { 
      text:'',
      type:'',
      count:''
    };
    this.onTextChange=this.onTextChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onCountChange=this.onCountChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onTextChange(event) {
    this.setState({
      text: event.target.value
    });
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
  return (<div>
    <Fix>
        <Wrapper>
          <Header />
          
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' /> 
          <form onSubmit={this.formSubmit}>
          <Content>
            <Title>Summarize Your Text</Title>
            <TextComponent title="요약하고싶은 텍스트를 입력하세요!" />
            <TextComponent title="" /> <TextComponent title="" /> <TextComponent title="" />
          </Content>
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' /> 
          <Content>
          <Input placeholder="Input your text here."  onChange={this.onTextChange} ></Input></Content>
          <BlankTop DesktopMargin='5' TabletMargin='3' MobileMargin='1' /> 
          <Content>
          <Title>Select Text Type</Title>
          <TextComponent title="요약하는 문장의 종류를 선택하세요!" />
          <TextComponent title="" />
          <Title>Select Text Count</Title>
          <TextComponent title="요약 문장의 개수를 선택하세요!" />
          </Content>
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' /> 
          <Content>
            <Box>
          <Radio.Group style={{display:'flex', justifyContent:'center'}} name={'type'} onChange={this.onTypeChange}>
                <Radio style={{margin:'30px', paddingRight:'50px'}}  checked={this.state.type=== "t"} value="t">문어체</Radio>
                
                <Radio   style={{margin:'30px'}} checked={this.state.type === "s"} value="s">구어체</Radio>
              </Radio.Group> </Box>
              <Box>
          <Radio.Group style={{display:'flex', justifyContent:'center'}} name={'count'} onChange={this.onCountChange}>
                <Radio  style={{margin:'30px', paddingRight:'40px'}} checked={this.state.count === "3"} value="3">3문장</Radio>
                <Radio  style={{margin:'30px', paddingRight:'40px'}}checked={this.state.count === "5"} value="5">5문장</Radio>
                <Radio  style={{margin:'30px', paddingRight:'40px'}} checked={this.state.count === "7"} value="7">7문장</Radio>
              </Radio.Group> </Box>  
      
          </Content>
          <BlankTop DesktopMargin='1' TabletMargin='1' MobileMargin='1' /> 
          <Content>
          <TextComponent title="" />
          <Button  color={'white'} background={'#10375C'} type="submit"> &emsp; &emsp; Submit &emsp;&emsp; </Button></Content>
          </form>
          <Content>
            <PinkTitle>Summary Result</PinkTitle>
          <TextComponent title="요약된 결과를 확인하세요!" /> 
          <TextComponent title="" />  <TextComponent title="" />  <TextComponent title="" /> 
          </Content>
          <BlankTop DesktopMargin='3' TabletMargin='1' MobileMargin='1' /> 
          <Content>
          <PinkBox> <TextComponent title="" /> </PinkBox></Content>
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' /> 
          </Wrapper>
          
    </Fix>
    <Footer></Footer> </div>
  );
}
}

export default SummarizePage;
