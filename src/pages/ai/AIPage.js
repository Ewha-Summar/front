import { useEffect, useState,Component } from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import BlankTop from "../../components/BlankTop";
import TextComponent from "../../components/TextComponent";
import Footer from "../../components/footer/Footer_AI";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { registerAI,getSummary} from "../../_actions/user_action";

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
  z-index: 5;
  display: flex;
  outline:none;
  font-family:Roboto;
  font-size:16px;
  align-items: center;
  padding-right: 20px;
`

const Confidence = styled.div`
  width: 130px;
  height: 30px;
  margin: 25px auto auto 100px;
  font-family: Raleway;
  font-size:24px;
`

const ConfidenceValue = styled.div`
  width: 120px;
  height: 60px;
  font-size:36px;
  font-family:Roboto;
  margin: 20px auto auto 0px;
  color: #666666;
`

const Input = styled.input`
    font-family: NanumGothic;
    color:#000000;
    line-height : 20px;
    font-size: 16px;
    overflow-wrap:"auto";
    width:1270px;
    height: 50px;
    border: 1px solid #10375C;
    border-radius:5px;
    outline:none;
    margin: 20px 0px;
`

const StyledButton = styled.button`
  margin:auto 0 auto auto;
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


function AIPage() {
 const [myState,setMyState]=useState({
  question:"",
  answer:"",
  confidence:0,
  summary_id:Number(window.localStorage.getItem('summary_id'))
 });
 const dispatch=useDispatch();

 const [myResult, setMyResult] =useState({
  summary:''
});
  
 const showSummary= async evt =>  {
  evt.preventDefault();
  dispatch(getSummary(Number(window.localStorage.getItem('summary_id'))))
          .then(response => {
            if (response.payload.success) {
              console.log("success");
              console.log(response.payload.data.content);
              setMyResult({
                ...myState,
                summary: response.payload.data.content
              });
              
            } else {
              console.log("error");
            }
          })
}

 const onQuestionChange= async evt =>  {
    setMyState({
      ...myState,
      question: evt.target.value
    });
  }
  

  const formSubmit= async evt =>  {
    evt.preventDefault();
    console.log({"question":myState.question,"summary_id":myState.summary_id});
    console.log(window.localStorage.getItem('jwt'));
    dispatch(registerAI(myState.summary_id,myState.question))
    .then(response => {
      if (response.payload.success) {
        console.log(response.payload.data);
        setMyState({
          ...myState,
          answer:response.payload.data.answer,
          confidence:response.payload.data.confidence
        })
        
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
            <PinkBox> <TextComponent width={100} title={myResult.summary} /> </PinkBox>
          </Content>
          <Content>
          <TextComponent title="" />
          <Button  color={'white'} background={'#EF746F'} onClick={showSummary} > &emsp; &emsp; See the results &emsp;&emsp; </Button></Content>
          <BlankTop DesktopMargin='7' TabletMargin='3' MobileMargin='1' /> 
          <form onSubmit={formSubmit}>
          <Content>
            <Title>AI Question</Title>
          </Content>
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1'/>
          <Content>
            <Input placeholder =" Input your text here." value={myState.question} onChange={onQuestionChange}/>
            <Button  color={'white'} background={'#10375C'} type="submit"> &emsp; &emsp; Submit &emsp;&emsp; </Button>
          </Content>
          </form>
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />
          <Content>
            <GrayBox>
              <QuestionNo>A</QuestionNo>
              <Questiontext>{myState.answer}</Questiontext>
            </GrayBox>
            <Confidence>Confidence</Confidence>
            <ConfidenceValue>{myState.confidence}%</ConfidenceValue>
          </Content>
          <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1'/>
        </Wrapper>
      </Fix>
      <Footer></Footer>
    </div>
    );
  }



export default AIPage;