import styled from "styled-components";
import Button from "../../components/Button"


const Wrapper = styled.div`
margin-top:100px;
  width:700px;
  height:250px;
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
    width:150px;
    line-height: 10px;
    font-weight:bold;
    font-size: 20px;
    margin-bottom:10px;
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

const CardComponent =() =>{
    
    return(
        <Wrapper>
            <Circle /> 
            <Row>
            <Title>Book Title</Title></Row>
            <Row>
            <Content> Make the appearance of a mobile application that has quality and increases user convenienceMake the appearance of a mobile application that has quality and increases user convenienceMake the appearance of a mobile application that has quality and increases user convenience
            Make the appearance of a mobile application that has quality and increases user convenienceMake the appearance of a mobile application that has quality and increases user convenienceMake the appearance of a mobile application that has quality and increases user convenience
            </Content>
            
            </Row>
        </Wrapper>
    );
}

export default CardComponent;