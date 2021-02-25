import styled from "styled-components";
import Button from "../../components/Button"


const Wrapper = styled.div`
margin-top:100px;
  width:700px;
  height:750px;
  display:flex;
  border: 1px solid #10375C;
  border-radius:10px;
  display: flex;
  flex-direction: column;
  z-index:1;
  outline:none;
`

const Circle =styled.div`
position: absolute;
margin-left:10px;
margin-top:10px;
    width:48px;
    height:48px;
    background:#10375C;
    border-radius:50%;

`;

const Title = styled.div`
margin-top:10px;
margin-left:80px;
    font-family: Lora;
    color:#10375C;
    width:300px;
    line-height: 10px;
    font-weight:bold;
    font-size: 20px;
    margin-bottom:10px;
`
const Author = styled.div`
display: flex;
  flex-direction: row;
  justify-content:flex-end;
  margin-right:10px;
  font-weight:bold;
`

const Content = styled.div`
margin-top:10px;
margin-left:80px;
    font-family: Lora;
    color:#000000;
    width:500px;
    line-height: 20px;
    font-size: 14px;
`
const Row=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const CardComponent =({bookTitle,content,bookAuthor,user_id}) =>{
    
    return(
        <Wrapper>
            <Circle /> 
            <Row>
            <Title>{bookTitle}</Title></Row>
           
            <Author>Author:{bookAuthor}</Author>
            
            
            <Row>
            <Content> {content}
            </Content>
            
            </Row>
            <Author>by {user_id} </Author>
        </Wrapper>
    );
}

export default CardComponent;