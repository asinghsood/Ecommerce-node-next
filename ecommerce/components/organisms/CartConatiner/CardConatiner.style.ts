import styled from "styled-components";

export const Wrapper = styled.div(
  ({theme})=>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 980px;
  margin: 0 auto;
  background: ${theme.background};
  box-shadow: 1px 1px 19px 2px ${theme.boxShadow};
    -webkit-box-shadow: 1px 1px 19px 2px ${theme.boxShadow};
    -moz-box-shadow: 1px 1px 19px 2px ${theme.boxShadow};
`);

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