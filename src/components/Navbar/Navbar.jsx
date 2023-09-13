import React from "react";
import Button from "../Button";
import { styled } from "styled-components";

import logo from "../../assets/images/svg/logo.svg";
import { THEME } from "../../Constants";

function Navbar() {
  return (
    <Wrapper>
      <Bar>
        <Logo>
          <img src={logo} alt="logo" />
          <p>Продвижение товаров на Wildberries</p>
        </Logo>
        <div className="flex">
          <Button $width={"188"}>Войти</Button>
          <Button $borderColor={THEME.COLORS.primary}>
            Зарегистрироваться
          </Button>
        </div>
      </Bar>
      <Nav></Nav>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: ${35 / 16}rem 0;
`;
const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .flex {
    gap: ${20 / 16}rem;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${28 / 16}rem;
  font-size: ${THEME.SIZES.textSmall};
  color: ${THEME.COLORS.white};
  font-family: "Manrope";
`;
const Nav = styled.nav``;

export default Navbar;
