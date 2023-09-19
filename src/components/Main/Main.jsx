import React from "react";
import { styled } from "styled-components";
import Service from "../Service/Service";
import Container from "../Container/Container";
import Problems from "../Problems";
import Partner from "../Partner";
import Easy from "../Easy";
import Fit from "../Fit";

function Main() {
  return (
    <Wrapper>
      <Container>
        <Service />
        <Problems />
        <Easy />
        <Partner />
        <Fit />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.main``;

export default Main;
