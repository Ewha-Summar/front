import styled from "styled-components";
import Button from "../../components/Button"


const Wrapper = styled.div`
margin-top:50px;
  width:400px;
  height:370px;
  display:flex;
  background: rgba(16, 55, 92, 0.7);
  border-radius:10px;
  display: flex;
  flex-direction: column;
  outline:none;
`
const White = styled.div`
margin-top:100px;
margin-left:20px;
  width:360px;
  height:250px;
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
  margin-right:10px;
  font-weight:bold;

`


const Row=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right:20px;
  margin-left:20px;
`

function SummaryComponent({bookTitle,bookContent,bookAuthor,saveTitle}){
    
    return(
        <Wrapper>
            <White> <Row>
                <Title> {saveTitle}</Title></Row>
                <Row><Content>{bookContent}</Content></Row>
                <Author>{bookTitle}</Author><Author>{bookAuthor}</Author>
            </White> 
        </Wrapper>
    );
}

export default SummaryComponent;