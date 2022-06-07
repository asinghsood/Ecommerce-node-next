import styled from "styled-components";
import {ThemeObject} from "../../../styles/types"

export const CardCotainer = styled.div<{isCartPage?: boolean}>(
  ({ isCartPage, theme }) => `
    display: flex;
    flex-direction: column;
    background: ${theme.body};
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
  background: ${({ theme }: ThemeObject) => theme.body};
  padding: 1em;
  text-align: center;
   
   button {
    color: #ff3e6c;
   }
`;

export const Container = styled.div<{isCartPage?: boolean}>(
  ({isCartPage, theme}) => `
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1600px;
  margin-top: 20px;
  background: ${theme.body};
  
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
  justify-content: flex-start;
  max-width: 100%;

  ${isLiScrollable && `
    height: 500px;
    overflow-y: scroll;
  `}
`
);

export const LICard = styled.li<{ liWidth?: string, isCartPage?: boolean }>(
  ({ liWidth, isCartPage }) => `
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  padding: 0 0.5em;
  list-style: none;
  transition: width 0.4s ease-in-out, flex 0.4s ease-in-out;
  width: ${liWidth || '25%'};
  margin-bottom: 10px;
  max-width: ${liWidth ? '100%' : '300px'};

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

// export const CardCotainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   background: ${({ theme }) => theme.body};
//   border-radius: 2px;
//   padding: 1em;
//   /* margin-bottom: 1em; */
//   width: 100%;
// `;

// export const CardContent = styled.div`
//   display: flex;
//   -moz-flex-direction: column;
//   flex-direction: column;
//   -moz-flex: 1 0 auto;
//   flex: 1 0 auto;
// `;

// export const StyledFooter = styled.div`
//   border: 1px solid #c3c3c6;
//   background: ${({ theme }) => theme.body};
//   padding: 1em;
//   text-align: center;
   
//    button {
//     color: #ff3e6c;
//    }
// `;

// old

// export const StyledCard = styled.div`
//   background: ${({ theme }) => theme.background};
//   padding: 0 0 14px;
//   flex: 1 0 210px;
//   box-sizing: border-box;
//   margin: 40px 0 0 40px;
//   outline: 1px solid #e9e9eb;
//   position: relative;
//   height: 425px;
//   max-width: 220px;

//   .item-details {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     align-items: center;
//     height: 94px;
//     font-size: 14px;
//     text-align: left;
//     color: #696b79;
//     padding: 10px 10px 0;
//     border: none !important;
//     border-bottom: 1px solid #e9e9eb !important;

//     .item-label {
//       text-overflow: ellipsis;
//       /* Needed to make it work */
//       overflow: hidden;
//       white-space: nowrap;
//     }
//     .item-price {
//       font-weight: 500;
//       font-size: 16px;
//       color: #282c3f;
//     }
//   }
//   .action-container {
//     display: flex;
//     justify-content: center;

//     padding: 5px 10px;
//     a {
//       color: #ff3e6c;
//       font-weight: 400;
//       :hover {
//         text-decoration: underline;
//       }
//     }
//   }
// `;

// export const StyledImage = styled.div`
//   position: relative;
//   min-height: 294px;
// `;
