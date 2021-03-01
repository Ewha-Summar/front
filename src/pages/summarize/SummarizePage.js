import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import Header from "../../components/header/Header";
import BlankTop from "../../components/BlankTop";
import TextComponent from "../../components/TextComponent";
import {Radio} from 'antd';
import Button from "../../components/Button";
import Footer from "../../components/footer/Footer";
import { registerSummary,getSummary } from "../../_actions/user_action";



const Fix =styled.div`
min-height:100vh;
background-color:  #ffffff;
`
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
const Input = styled.textarea`
    font-family: NanumGothic;
    color:#000000;
    line-height: 15px;
    font-size: 13px;
    overflow-wrap:auto;
    width:1700px;
    height:220px;
    border: 1px solid #10375C;
    border-radius:10px;
    outline:none;     
`
const SmallInput = styled.input`
    font-family: NanumGothic;
    color:#000000;
    line-height: 15px;
    font-size: 13px;
    overflow-wrap:auto;
    width:680px;
    height:80px;
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
const Summary = styled.div`
    font-family: NanumGothic;
    color:#6A6A6A;
    font-size: 15px;
    width:200rem;
`

function SummarizePage({props}) { 
  const [myState, setMyState] =useState({
    book_title:'',
    summary_title:'',
    book_author:'',
    count:3,
    input_type:0,
    bf_summary:'',
    summary:''
  });
    
  
  const dispatch = useDispatch();

  const onSaveChange= async evt =>  {
    const { name, value } = evt.target
    try{
      setMyState({
        ...myState,
        [name]:value
      })
    }catch(e){
      console.error(e)
    }
  }

  const onTypeChange= async evt => {
    if(evt.target.value==="0"){
      setMyState({
        ...myState,
        type: 0
      });
    }
    else{
      setMyState({
        ...myState,
        input_type: 1
      });
    }
    
  }

  const onCountChange= async evt => {
    if(evt.target.value==="3"){
      setMyState({
        ...myState,
        count: 3
      });
    }
    if(evt.target.value==="5"){
      setMyState({
        ...myState,
        count:5
      });
    }
    if(evt.target.value==="7"){
      setMyState({
        ...myState,
        count: 7
      });
    }
  }


  const formSubmit= async evt =>  {
    evt.preventDefault();
    console.log(myState);

    dispatch(registerSummary(myState))
            .then(response => {
              if (response.payload.success) {
                window.localStorage.setItem('summary_id',response.payload.data.summary_id);
                window.localStorage.setItem("answer_arr",JSON.stringify({}));
              } else {
                console.log("error");
              }
            })
  }

  const showSummary= async evt =>  {
    evt.preventDefault();
    dispatch(getSummary(Number(window.localStorage.getItem('summary_id'))))
            .then(response => {
              if (response.payload.success) {
                console.log("success");

                setMyState({
                  ...myState,
                  summary: response.payload.data.content
                });
              } else {
                console.log("error");
              }
            })
  }



  return (<div>
    <Fix>
        <Wrapper>
          <Header />
          
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' /> 
          <form onSubmit={formSubmit}>
          <Content>
          <Title>Input Text Title</Title>
          <TextComponent title="저장 제목을 입력하세요!" /><TextComponent title="" /><TextComponent title="" /><TextComponent title="" /></Content>
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />
          <Content> <SmallInput type="text" placeholder="Input your text here." name="summary_title" onChange={onSaveChange} ></SmallInput></Content>
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />
          <Content>
          <Title>Input Book Title</Title>
          <TextComponent title="요약문 제목을 입력하세요!" />
          <TextComponent title="" />
          <Title>Input Book Author</Title>
          <TextComponent title="요약문의 저자 또는 출처를 입력하세요!" />
          </Content>
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />
          <Content>
          <SmallInput type="text" placeholder="Input your text here."  name="book_title" onChange={onSaveChange} ></SmallInput>
          <SmallInput type="text" placeholder="Input your text here."  name="book_author" onChange={onSaveChange} ></SmallInput></Content>
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
          <Radio.Group style={{display:'flex', justifyContent:'center'}} name='input_type' onChange={onTypeChange}>
                <Radio style={{margin:'30px', paddingRight:'50px'}}  value="0">문어체</Radio>
                
                <Radio   style={{margin:'30px'}}  value="1">구어체</Radio>
              </Radio.Group> </Box>
              <Box>
          <Radio.Group style={{display:'flex', justifyContent:'center'}} name='count' onChange={onCountChange}>
                <Radio  style={{margin:'30px', paddingRight:'40px'}}  value="3">3문장</Radio>
                <Radio  style={{margin:'30px', paddingRight:'40px'}} value="5">5문장</Radio>
                <Radio  style={{margin:'30px', paddingRight:'40px'}}  value="7">7문장</Radio>
              </Radio.Group> </Box>  
      
          </Content>
          <BlankTop DesktopMargin='5' TabletMargin='1' MobileMargin='1' /> 
          <Content>
            <Title>Summarize Your Text</Title>
            <TextComponent title="요약하고싶은 텍스트를 입력하세요!" />
            <TextComponent title="" /> <TextComponent title="" /> <TextComponent title="" />
          </Content>
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' /> 
          <Content>
          <Input type="text" placeholder="Input your text here." name='text' onChange={onSaveChange} defaultValue={window.localStorage.getItem('text')}></Input></Content>
          <BlankTop DesktopMargin='5' TabletMargin='3' MobileMargin='1' /> 
          <Content>
          <TextComponent title="" />
          <Button  color={'white'} background={'#10375C'} type="submit" > &emsp; &emsp; Submit &emsp;&emsp; </Button></Content>
          </form>
          <Content>
            <PinkTitle>Summary Result</PinkTitle>
          <TextComponent title="요약된 결과를 확인하세요!" /> 
          <TextComponent title="" />  <TextComponent title="" />  <TextComponent title="" /> 
          </Content>
          <BlankTop DesktopMargin='3' TabletMargin='1' MobileMargin='1' /> 
          <Content>
          <PinkBox> <TextComponent width={100} title={myState.summary} /> </PinkBox></Content>
          <Content>
          <TextComponent title="" />
          <Button  color={'white'} background={'#EF746F'} onClick={showSummary} > &emsp; &emsp; See the results &emsp;&emsp; </Button></Content>
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' /> 
          </Wrapper>
          
    </Fix>
    <Footer></Footer> </div>
  );
}


export default SummarizePage;
