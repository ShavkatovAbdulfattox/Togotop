import React from "react";
import { styled } from "styled-components";
import Service from "../Service/Service";
import Container from "../Container/Container";
import Problems from "../Problems/Problems";
import Partner from "../Partner/Partner";

function Main() {
  return (
    <Wrapper>
      <Container>
        <Service />
        <Problems />
        <Partner />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.main``;

export default Main;
