import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 980px;
  margin: 0 auto;
`;

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