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