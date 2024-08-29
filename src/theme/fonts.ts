import { createGlobalStyle } from 'styled-components';
import LatoBold from '../assets/fonts/Lato-Bold.ttf';
import LatoRegular from '../assets/fonts/Lato-Regular.ttf';

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url(${LatoRegular}) format('truetype'), url(${LatoBold}) format('truetype');
  }
`;
