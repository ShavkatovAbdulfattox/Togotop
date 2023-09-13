import React, { useId } from "react";
import Button from "../Button";
import { styled } from "styled-components";
import { THEME } from "../../Constants";

import logo from "../../assets/images/svg/logo.svg";
import down from "../../assets/icons/down.svg";
const link = [
  {
    text: "Как это работает",
  },
  {
    text: "Сервисы",
    icon: true,
  },
  {
    text: "Тарифы",
  },
  {
    text: "Переезд на TOGOTOP",
  },
  {
    text: "Партнерам",
    icon: true,
  },
  {
    text: "Помощь",
  },
];

function Navbar() {
  const id = useId();
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
      {/* ================= NAV ================== */}
      <Nav aria-label="navigation">
        <ul>
          {link.map(({ text, icon }, index) => {
            return (
              <li key={`${id + index}-`}>
                <a href="">{text}</a>
                {icon && <img src={down} alt="down-svg" />}
              </li>
            );
          })}
        </ul>
      </Nav>
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
const Nav = styled.nav`
  border-radius: 20px;
  border: 2px solid ${THEME.COLORS.border};
  background: ${THEME.COLORS.bg};
  opacity: 0.9;
  padding: 18px 0;
  margin-top: ${26 / 16}rem;
  & ul {
    display: flex;
    gap: ${THEME.SIZES.spaceXL};
    padding-left: 75px;
  }
  & li {
    display: flex;
    align-items: baseline;
    gap: 17px;
    &:hover {
      background-color: ${THEME.COLORS.primary};
      transition: all 0.4;
      border-radius: 100px;
      padding: 6px 23px;
      margin: -6px -23px;
    }
    & a {
      color: ${THEME.COLORS.white};
      font-family: Manrope;
      font-size: 17px;
      font-weight: 700;
      line-height: 17px;
    }
    & img {
      width: 10px;
      height: 8px;
    }
  }
`;

export default Navbar;
