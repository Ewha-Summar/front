import styled from "styled-components";
import Button from "../../components/Button"


const Wrapper = styled.div`
margin-top:100px;
  width:500px;
  height:200px;
  display:flex;
  background: rgba(16, 55, 92, 0.2);
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
    width:60px;
    height:60px;
    top:210px;
    left:370px;
    background:#10375C;
    border-radius:50%;
`;

const Title = styled.div`
margin-top:70px;

    font-family: Lora;
    color:#10375C;

    line-height: 10px;
    font-weight:bold;
    font-size: 20px;
    margin-bottom:10px;
`

const Content = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;

    width:400px;
    line-height: 20px;
    font-size: 14px;
    margin-top:20px;
`
const Row=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

function CardComponent({nickname,email}){
    
    return(
        <Wrapper>
            <Circle /> 
            <Row>
            <Title>{nickname}</Title></Row>
            <Row>
            <Content> {email}</Content>
            </Row>
        </Wrapper>
    );
}

export default CardComponent;