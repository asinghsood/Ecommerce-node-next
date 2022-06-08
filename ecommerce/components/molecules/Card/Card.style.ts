import styled from "styled-components";
import {ThemeObject} from "../../../styles/types"

export const CardCotainer = styled.div<{isCartPage?: boolean}>(
  ({ isCartPage, theme }) => `
    display: flex;
    flex-direction: column;
    background: ${theme.background};
    border-radius: 2px;
    padding: 1em;
    width: 100%;
    ${isCartPage && `
      padding-top: 0;
    `}
  `
);

export const CardContent = styled.div(
() => `
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  `
);

export const StyledFooter = styled.div`
  border: 1px solid #c3c3c6;
  background: ${({ theme }: ThemeObject) => theme.background};
  padding: 1em;
  text-align: center;
   
   button {
    color: #ff3e6c;
   }
`;

export const Container = styled.div<{isCartPage?: boolean}>(
  ({isCartPage}) => `
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1600px;
  margin-top: 20px;
  
  ${isCartPage && `
    width: 50%;
  `}

    @media screen and (max-width: 649px) {
      padding: 0 10px;
      ${isCartPage && `
        width: 100%;
      `}
    }
  `
);

export const UlList = styled.ul<{ isLiScrollable?: boolean }>(
  ({ isLiScrollable }) => `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;

  ${isLiScrollable && `
    height: 500px;
    overflow-y: scroll;
  `}
`
);

export const LICard = styled.li<{ liWidth?: string, isCartPage?: boolean }>(
  ({ liWidth, isCartPage, theme }) => `
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  list-style: none;
  background: ${theme.background};
  transition: width 0.4s ease-in-out, flex 0.4s ease-in-out;
  width: ${liWidth || '25%'};
  margin-bottom: 10px;
  max-width: ${liWidth ? '100%' : '300px'};
  ${isCartPage && `
   border: 1px solid #c3c3c6;
      `}

  @media screen and (max-width: 1024px) {
      width: 33.33%;
      ${isCartPage && `
        width: 100%;
      `}
  }
  @media screen and (max-width: 767px) {
      width: 50%;
      ${isCartPage && `
        width: 100%;
      `}
  }
  @media screen and (max-width: 649px) {
      padding-left: 0;
      width: 100%;
  }

  ${isCartPage && `
    flex-direction: row;
    align-items: start;
    width: 100%;
  `}
`);


