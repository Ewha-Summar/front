import { useEffect, useState } from "react";

import styled from "styled-components";
import Header from "../../components/header/Header"

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
const SummarizePage = (match) => {

  return (
    <Fix>
        <Wrapper></Wrapper>
    </Fix>
  );
};

export default SummarizePage;
