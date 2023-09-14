import React from "react";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";

import { styled } from "styled-components";
import headerBg from "../../assets/images/header-bg.png";
import Button from "../Button";
import { THEME } from "../../Constants";

import snikers from "../../assets/images/svg/snikers.svg";
import star from "../../assets/images/svg/star.svg";
import line from "../../assets/images/svg/line.svg";
function Header() {
  return (
    <Wrapper>
      {" "}
      <BackgroundImage src={headerBg} />
      <Container>
        <Navbar />
        <HeaderContent>
          <Left>
            <h1>
              С TOGOTOP <span>ваши товары</span> всегда будут{" "}
              <span>в ТОПе</span>{" "}
            </h1>
            <p>
              Полный набор инструментов для продвижения на Wildberries, которые
              выведут ваш бизнес на новый уровень.
            </p>
            <Button $bg={THEME.COLORS.secondary} $pY={"18"} $size={"24px"}>
              Попробовать бесплатно
            </Button>
          </Left>
          <Right>
            <img src={line} alt="bg-line" />
            <Card>
              <Image src={snikers} alt="snikers" />
              <div>
                <h3>Спортивные кросовки</h3>
                <div>
                  <p>
                    {" "}
                    <img src={star} alt="star" /> 4.9
                  </p>
                  <p>1756 отзывов</p>
                </div>
              </div>
            </Card>
          </Right>
        </HeaderContent>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 100vh;
  position: relative;
`;
const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -12;
  user-select: none;
`;

const HeaderContent = styled.div`
  margin-top: ${35 / 16}rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  & h1 {
    color: ${THEME.COLORS.white};
    font-size: ${THEME.SIZES.title};
    font-family: "Inter";
    letter-spacing: 1.5px;
    max-width: 799px;
    & span {
      color: ${THEME.COLORS.primary};
    }
    & span:first-of-type {
      color: ${THEME.COLORS.secondary};
    }
  }
  & p {
    color: ${THEME.COLORS.white};
    font-size: ${THEME.SIZES.text};
    font-family: "Manrope";
    line-height: 1.67;
    max-width: 520px;
    margin-bottom: ${72 / 16}rem;
    margin-top: ${51 / 16}rem;
  }
`;
const Right = styled.div`
  position: relative;

  & > img {
    position: absolute;
    right: calc(100% + 18px);
    bottom: 0;
    z-index: -10;
    user-select: none;
  }
`;
const Card = styled.div`
  border-radius: 20px;
  border: 1px solid ${THEME.COLORS.border};
  background: #141414;
  padding: 14px;
  height: 505px;
  width: 100%;
  max-width: 371px;
  display: flex;
  flex-direction: column;
  & h3 {
    color: ${THEME.COLORS.white};
    font-family: "Inter";
    font-size: ${THEME.SIZES.textMd};
    font-weight: 700;
  }
  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
  & div > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 10px;
    & p:first-of-type {
      color: ${THEME.COLORS.white};
      font-size: ${THEME.SIZES.textMd};
      font-family: "Inter";
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    & p {
      color: ${THEME.COLORS.white};
      font-size: 16px;
      font-weight: 350;
    }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export default Header;
