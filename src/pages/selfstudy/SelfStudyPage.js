import { useEffect, useState } from "react";

import styled from "styled-components";
import { useDispatch } from 'react-redux';
import Header from "../../components/header/Header";
import BlankTop from "../../components/BlankTop";
import TextComponent from "../../components/TextComponent";
import Button from "../../components/Button";
import Footer from "../../components/footer/Footer";
import { getSummary, sendSelfStudy } from "../../_actions/user_action";

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
`
const Title = styled.div`
    font-family: Lora;
    color:#10375C;
    margin-left:10px;
    width:45rem;
    line-height: 10px;
    font-weight:bold;
    font-size: 40px;
`

const PinkBox = styled.div`
  width:800px;
  height:220px;
  display:flex;
  border: 1px solid #EF746F;
  border-radius:5px;
  z-index:1;
  outline:none;
`
const PinkTitle = styled.div`
    font-family: Lora;
    color:#EF746F;
    width:45rem;
    line-height: 10px;
    margin-left:50px;
    font-weight:bold;
    font-size: 40px;
`



const Input = styled.textarea`
    font-family: NanumGothic;
    color:#000000;
    line-height : 20px;
    font-size: 16px;
    overflow-wrap:auto;
    width:800px;
    height: 220px;
    border: 1px solid #10375C;
    border-radius:5px;
    outline:none;

`

const StyledButton = styled.button`
  margin:auto 0 auto auto;
  height:  50px ;
  width: 300px ;
  border: 1px solid ${(props) => props.border || "rgba( 255, 255, 255, 0 )"};
  color: ${(props) => props.color || "black"};
  background: ${(props) => props.background || "rgba( 255, 255, 255, 0 )"};
  font-size: solid ${props => props.font || 0}px;
  padding-right:5px;
  outline:none;
  border-radius: 5px;
`


function SelfStudyPage() {
    const [myState, setMyState] = useState({
        text: "",
        summary_id: Number(window.localStorage.getItem('summary_id'))
    });
    const dispatch = useDispatch();

    const [myResult, setMyResult] = useState({
        self_learning: "",
        summary_id: Number(window.localStorage.getItem('summary_id'))

    });

    const showSummary = async evt => {
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
    const onSaveChange = async evt => {
        const { value } = evt.target
        try {
            setMyResult({
                ...myResult,
                self_learning: value
            })
            console.log(myResult);
        } catch (e) {
            console.error(e)
        }
    }

    const sendSelf = async evt => {
        evt.preventDefault();
        dispatch(sendSelfStudy(myResult))
            .then(response => {
                if (response.payload.success) {
                    console.log("success");
                    console.log(myResult);

                } else {
                    console.log("error");
                    console.log(myResult);
                }
            })
    }



    return (
        <div>
            <Fix>
                <Wrapper>
                    <Header />

                    <BlankTop DesktopMargin='7' TabletMargin='3' MobileMargin='1' />
                    <Content>
                        <Title>Type Your Text</Title>
                        <TextComponent title="공부했던 내용을 정리해보세요!" />

                        <PinkTitle>Summary Result</PinkTitle>
                        <TextComponent title="요약된 결과를 확인하세요!" />

                    </Content>
                    <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />
                    <Content>
                        <Input type="text" placeholder="Input your text here." name="self_learning" onChange={onSaveChange}></Input>
                        <PinkBox> <TextComponent width={100} title={myResult.summary} /> </PinkBox></Content>
                    <Content>

                    </Content>

                    <BlankTop DesktopMargin='1' TabletMargin='3' MobileMargin='1' />
                    <Content>

                    </Content>
                    <Content>
                        <TextComponent title="" />
                        <Button color={'white'} background={'#10375C'} onClick={sendSelf} type="submit" > &emsp; &emsp; Save the text &emsp;&emsp; </Button>
                        <TextComponent title="" />
                        <Button color={'white'} background={'#EF746F'} onClick={showSummary} > &emsp; &emsp; See the results &emsp;&emsp; </Button>

                    </Content>
                    <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />
                </Wrapper>
                <Footer></Footer>
            </Fix>

        </div>
    );
}



export default SelfStudyPage;