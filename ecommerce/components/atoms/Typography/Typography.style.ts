import styled from "styled-components";

interface StylePropsType {
  styleType: string;
  margin?: string;
  theme: Map
}

interface Map {
    [key: string]: string | undefined
  }


export const Text = styled.p((props: StylePropsType) => {
    const { theme, styleType } = props;
  return `
        color: ${props.theme.text};
        margin: ${props.margin};
        ${theme[styleType] || styleType};
    `;
});
