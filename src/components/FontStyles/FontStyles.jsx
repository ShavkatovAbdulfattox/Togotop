import { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Bold.ttf') format('truetype'); // Adjust the path
  }
  @font-face {
    font-family: 'Circe';
    src: url('/fonts/Circe-Bold.ttf') format('truetype'); // Adjust the path
  }
  @font-face {
    font-family: 'Manrope';
    src: url('/fonts/Manrope-Bold.ttf') format('truetype'); // Adjust the path
  }
  h1{
    font-family: "Manrope";
  }
`;
