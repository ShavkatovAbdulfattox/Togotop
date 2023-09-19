import React from "react";
import Title from "../Title/Title";
import styled from "styled-components";
import icon from "../../assets/images/svg/fit/icon.svg";
import icon2 from "../../assets/images/svg/fit/icon2.svg";
import icon3 from "../../assets/images/svg/fit/icon3.svg";
import icon4 from "../../assets/images/svg/fit/icon4.svg";

const fitDesc = [
  {
    title: "Действующий селлер",
    text: `Поставщики, производители, владельцы 
    интернет-магазинов, которые планируют 
    расширить каналы сбыта через маркетплейсы.`,
    icon: icon,
  },
  {
    title: "Действующий селлер",
    icon: icon2,
  },
  {
    title: "Менеджер маркетплейса",
    icon: icon3,
  },
  {
    title: "Digital студии и агентства",
    icon: icon4,
  },
];

function Fit() {
  return (
    <section>
      <Title>
        Для кого подойдет <span>TOGOTOP</span>
      </Title>
      <Content>
        {fitDesc.map(({ text, title, icon }, i) => {
          return (
            <div key={i}>
              <img src={icon} alt="icon" />
              <h2>{title}</h2>
              {text && <p>{text}</p>}
            </div>
          );
        })}
      </Content>
    </section>
  );
}

const Content = styled.article`
  display: flex;
  gap: 32px;
  margin-top: 65px;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    min-height: 353px;
    background: #191919;
    cursor: pointer;

    &:has(p) {
      width: 500px;
      justify-content: flex-start;
      padding: 33px 0 0 33px;
      align-items: self-start;
    }
    & img {
      width: fit-content;
    }
    & h2 {
      color: #fff;
      text-align: center;
      font-family: "Manrope";
      font-size: 25px;
      margin-top: 40px;
    }
    & p {
      color: #d7d7d7;
      font-size: 18px;
      margin-top: 14px;
    }
  }
`;

export default Fit;
