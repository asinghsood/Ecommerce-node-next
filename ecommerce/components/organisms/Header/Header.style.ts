import styled from "styled-components";

export const StyledHeader = styled.header`
  overflow: hidden;
  background-color: ${({ theme }) => theme.background};
  padding: 20px 10px;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: ${({ theme }) => theme.text};
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;

    :hover {
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.background};
      svg {
        fill: ${({ theme }) => theme.background};
        }
    }
  }
`;

export const RightComponent = styled.div`
      display: flex;
    align-items: center;
`;

export const LogoLink = styled.a(
    ({ theme }) => `
    display: flex;
    align-items: center;
    cursor: pointer;

    &&&{
        :hover {
            background-color: transparent;
            color: ${theme.text};
        }
    }
    `,
);

export const IconText = styled.span<{ fontSize?: string, marginLeft?: string }>(
    ({ fontSize, marginLeft }) => `
        font-size: ${fontSize || '18px'};
        margin-left: ${marginLeft || '4px'};
    `,
);