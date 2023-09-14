import React from "react";
import { styled } from "styled-components";
import { THEME } from "../../Constants";
import { loopOverNumbers } from "../../utils/loopOverNumbers";

const numbers = [
  { num: 3196, text: "Зарегистрировались на сервисе" },
  {
    num: 319759,
    violet: true,
    text: "Сделанных вуыкупов",
  },
  {
    num: 431975,
    text: "Действий с товарами",
  },
];

function HeaderFooter() {
  return (
    <Wrapper>
      <Bar>
        {numbers.map(({ num, text, violet }, i) => {
          return (
            <div key={i}>
              <p>
                {loopOverNumbers(num).map((num, i) => {
                  return (
                    <span
                      key={i}
                      style={{
                        color: `${violet ? THEME.COLORS.secondary : undefined}`,
                      }}
                    >
                      {num}
                    </span>
                  );
                })}
              </p>
              <p>{text}</p>
            </div>
          );
        })}
      </Bar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 20px;
  border: 1px solid #404040;
  margin-top: 30px;
`;
const Bar = styled.div`
  border-radius: 20px;
  background: #191919;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  & > div {
    display: flex;
    align-items: center;
    gap: 13px;
    & p {
      color: ${THEME.COLORS.white};
      font-size: 17px;
      font-style: normal;
    }
    & p:first-of-type {
      display: flex;
      gap: 5px;
      & span {
        font-size: ${THEME.SIZES.textMd};
        font-family: "Inter";
        color: ${THEME.COLORS.primary};
        border-radius: 7px;
        background: #262626;
        padding: 10px 6px;
        display: block;
        gap: 6px;
      }
    }
  }
`;

export default HeaderFooter;
