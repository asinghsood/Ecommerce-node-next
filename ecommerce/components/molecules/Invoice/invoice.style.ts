import styled from "styled-components";

export const TotalAmountContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  table {
    border-spacing: 30px;
    th {
      text-align: left;
    }
  }

  @media only screen and (max-width: 600px){  
    width: 100%;
}
`;

export const TotalAmount = styled.tr(
  ({theme}) => `
  background: ${theme.text};
  color: ${theme.background};
  `
);