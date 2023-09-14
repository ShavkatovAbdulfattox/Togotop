import React from "react";
import { styled } from "styled-components";
import { THEME } from "../../Constants";

import Title from "../Title/Title";

import service from "../../assets/images/svg/service.svg";

function Service() {
  return (
    <Wrapper>
      <Title>
        Возможности <span>сервиса</span>{" "}
      </Title>
      <Content>
        <img src={service} alt="service-img" />
        <div>
          <h3>Автоматизированная система самовыкупов</h3>
          <p>
            Поставщики, производители, владельцы интернет-магазинов, которые
            планируют расширить каналы сбыта через маркетплейсы.
          </p>
        </div>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: ${THEME.SIZES.spaceY};
`;
const Content = styled.div`
  margin-top: 100px;
  position: relative;
  border-radius: 20px;
  background: #191919;
  color: ${THEME.COLORS.white};
  padding: 104px 156px 104px 0;

  & div {
    max-width: 411px;
    margin-left: auto;
  }
  & img {
    position: absolute;
    top: -20%;
    left: 0;
  }
  & h3 {
    font-family: "Inter";
    font-size: 35px;
    letter-spacing: 1.05;
  }
  & p {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
  }
`;

export default Service;
