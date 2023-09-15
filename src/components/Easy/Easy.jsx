import React from "react";
import Title from "../Title/Title";
import styled from "styled-components";
import { THEME } from "../../Constants";
import easy from "../../assets/images/easy.png";

const easyDesc = [
  {
    title: "Зарегистрируйтесь",
    text: "На вашем балансе уже есть 150 рублей, которые вы можете потратить на тест платформы",
    num: "1",
  },
  {
    title: "Пополните баланс личного кабинета",
    text: "Выберите один из тарифов пополнения или внесите произвольную сумму пополнения",
    num: "2",
  },
  {
    title: "Запустите продвижение ",
    text: "Используйте все инструменты платформы для продвижения ваших товаров на маркетплейсе",
    num: "3",
  },
];

function Easy() {
  return (
    <Wrapper>
      <Title>
        С <span>TOGOTOP</span> все просто
      </Title>
      <Content>
        <article>
          {easyDesc.map(({ title, text, num }, i) => {
            return (
              <div key={i}>
                <div>{num}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </article>
        <div>
          <img src={easy} alt="" />
        </div>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: ${THEME.SIZES.spaceY};
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  & article {
    & > div {
      max-width: 530px;
      display: flex;
      align-items: center;
      gap: 40px;
      margin-top: 45px;

      & h3 {
        color: ${THEME.COLORS.white};
        font-family: "Inter";
        font-size: ${THEME.SIZES.text};
      }
      & p {
        color: ${THEME.COLORS.white};
        font-family: "Inter";
        font-size: 18px;
        opacity: 0.8;
        margin-top: 5px;
      }
      & div:first-of-type {
        color: ${THEME.COLORS.white};
        font-family: "Inter";
        font-size: 30px;
        height: 64px;
        width: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid ${THEME.COLORS.secondary};
        border-radius: 50%;
        cursor: pointer;
        flex-shrink: 0;
        &:hover {
          border: 3px solid ${THEME.COLORS.primary};
          background-color: ${THEME.COLORS.primary};
          transition: all 0.5s;
        }
      }
    }
  }
  & > div {
    border-radius: 20px;
    background: #191919;
    padding: 57px 43px;
  }
`;

export default Easy;
