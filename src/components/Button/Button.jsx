import { styled } from "styled-components";
import { THEME } from "../../Constants";

const Button = styled.button`
  min-height: ${({ $mHeight }) =>
    $mHeight ? $mHeight : " var(--min-tap-target-height)"};
  background-color: ${({ $bg }) => ($bg ? $bg : "transparent")};
  outline: none;
  cursor: pointer;
  border: 2px solid
    ${({ $borderColor }) =>
      $borderColor ? $borderColor : THEME.COLORS.secondary};
  border-radius: ${100 / 16}rem;
  font-size: ${({ $size }) => ($size ? $size : "14px")};
  font-family: ${({ $fFamily }) => ($fFamily ? $fFamily : "Manrope")};
  color: white;
  line-height: 1.5;
  padding: ${({ $pY }) => ($pY ? $pY + "px" : "0")} ${({ $pX }) => ($pX ? $pX + "px" : "43px")};
  min-width: ${({ $width }) => ($width ? $width + "px" : "233px")};
  max-width: 100%;
  &:active {
    transform: scale(0.98);
    transition: ease-in 100ms;
  }
`;
export default Button;
