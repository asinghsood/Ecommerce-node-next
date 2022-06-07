import styled from "styled-components";

export const LableStyled = styled.label`
  width: 50px;
  height: 28px;
  background-color: ${({ theme }) => theme.text};
  display: flex;
  border-radius:50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  /* transform: scale(1.5); */
`;

export const BallStyled = styled.div<{ inputValue?: boolean }>(
  ({ inputValue }) => `
    width: 24px;
    height: 24px;
    background-color: white;
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    transition: transform 0.2s linear;
    transform: ${inputValue ? 'translateX(24px)' : ''};
`,
);

export const InputCheckbox = styled.input`
  opacity: 0;
  position: absolute;
`;