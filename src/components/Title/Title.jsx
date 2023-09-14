import { styled } from "styled-components";
import { THEME } from "../../Constants";

const Title = styled.h2`
  font-family: "Inter";
  font-size: ${45 / 16}rem;
  line-height: 120%;
  letter-spacing: 1.35px;
  color: ${THEME.COLORS.white};
  & span {
    color: ${THEME.COLORS.primary};
  }
`;

export default Title;
