import React from "react";
import { styled } from "styled-components";
import Service from "../Service/Service";
import Container from "../Container/Container";
import Problems from "../Problems/Problems";

function Main() {
  return (
    <Wrapper>
      <Container>
        <Service />
        <Problems />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.main``;

export default Main;
