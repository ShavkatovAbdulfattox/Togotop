import React from "react";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";

import { styled } from "styled-components";
import headerBg from "../../assets/images/header-bg.png";

function Header() {
  return (
    <Wrapper>
      {" "}
      <BackgroundImage src={headerBg} />
      <Container>
        <Navbar />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 100vh;
  position: relative;
  isolation: isolate;
  overflow: hidden;
`;
const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -12;
  user-select: none;
`;
export default Header;
