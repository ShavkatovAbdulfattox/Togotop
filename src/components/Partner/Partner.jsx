import React from "react";
import Title from "../Title/Title";
import { styled } from "styled-components";
import anabar from "../../assets/images/partners/anabar.png";
import insale from "../../assets/images/partners/insale.png";
import sklad from "../../assets/images/partners/sklad.png";
import seller from "../../assets/images/partners/seller.png";
import agency from "../../assets/images/partners/agency.png";

function Partner() {
  return (
    <Wrapper>
      <Title>
        Наши <span>партнеры</span>
      </Title>
      <div>
        <img src={anabar} alt="anabar" />
        <img src={insale} alt="insale" />
        <img src={sklad} alt="sklad" />
        <img src={seller} alt="sellet" />
        <img src={agency} alt="agency" />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  margin-top: 100px;

  & div {
    display: flex;
    justify-content: space-between;
    margin: 100px 0;
    & img {
      object-fit: contain;
    }
  }
`;

export default Partner;
