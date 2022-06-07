import styled from "styled-components";
import {ThemeObject} from '../../../styles/types'

interface StylePropsType extends ThemeObject {
    styleType: string;
    margin?: string;
}

export const Text = styled.p(
    (props: StylePropsType) => `
        color: ${props.theme.text};
        margin: ${props.margin};
        // eslint-disable-next-line @typescript-eslint
        ${props.theme?.[props?.styleType]};
    `,
);