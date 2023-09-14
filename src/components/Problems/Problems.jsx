import React from "react";
import { styled } from "styled-components";
import { THEME } from "../../Constants";

import Title from "../Title/Title";
import volume from "../../assets/images/svg/volume.svg";

function Problems() {
  return (
    <Wrapper>
      <Title>
        {" "}
        Проблемы, которые <span>решает TOGOTOP</span>
      </Title>
      <TabGroup role="tablist">
        <TabList>
          <Tab>Масштабирование</Tab>
          <Tab>Автоматизация</Tab>
          <Tab>Репутация</Tab>
          <Tab>Аналитика</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <img src={volume} alt="problems" />
            <div>
              <h3>Увеличение объема продаж</h3>
              <p>
                <span> Проблема:</span> нет понимания, как масштабировать свой
                бизнес на Wildberries.
              </p>
              <p>
                <span>Решение: </span>в TOGOTOP есть все инструменты для
                продвижения товарных карточек в ТОП категорий маркетплейса.
              </p>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 130px;
`;
const TabGroup = styled.div`
  border-radius: 20px;
  background: #191919;
  padding: 45px;
  margin-top: 54px;
`;
const TabList = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Tab = styled.button`
  color: ${THEME.COLORS.white};
  font-family: "Inter";
  font-size: 18px;
  font-weight: 700;
  line-height: 120%; /* 21.6px */
  letter-spacing: 0.54px;
  background-color: transparent;
  border-radius: 25px;
  border: 3px solid ${THEME.COLORS.secondary};
  min-width: 274px;
  padding: 12px 0;
  cursor: pointer;

  &:first-of-type {
    background-color: ${THEME.COLORS.primary};
    border: 3px solid ${THEME.COLORS.primary};
  }
  &:hover {
    background-color: ${THEME.COLORS.primary};
    border: 3px solid ${THEME.COLORS.primary};
    transition: background-color ease 0.5s;
  }
  &:active {
    transform: scale(0.98);
    transition: 300ms;
  }
`;
const TabPanels = styled.div``;
const TabPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 52px;
  & > div {
    max-width: 400px;
  }
  & h3 {
    color: ${THEME.COLORS.white};
    font-family: "Manrope";
    font-size: 35px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 45.5px */
    letter-spacing: 1.05px;
    margin-bottom: 54px;
  }
  & p {
    color: ${THEME.COLORS.white};
    font-size: 18px;
    line-height: 147%;
    &:first-of-type {
      margin-bottom: 33px;
    }
    &:first-of-type span {
      color: ${THEME.COLORS.secondary};
    }
    & span {
      color: ${THEME.COLORS.primary};
    }
  }
`;

export default Problems;
