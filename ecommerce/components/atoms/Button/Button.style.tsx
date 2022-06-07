import styled from "styled-components";
import {ThemeObject} from '../../../styles/types'

interface StylePropsType extends ThemeObject {
    styleType?: string;
    margin?: string;
}

export const ButtonStyled  = styled.button(
    (props: StylePropsType) => `
        color: ${props.theme.text};
        background: transparent;
        border: none;
        position: relative;

       &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            border-radius: 4px;
            background-color: #ff3e6c;
            bottom: 0;
            left: 0;
            transform-origin: right;
            transform: scaleX(0);
            transition: transform .3s ease-in-out;
          }

        &:hover {
            cursor: pointer;
            &:before {
                transform-origin: left;
                transform: scaleX(1);
              }
        }
    `,
);