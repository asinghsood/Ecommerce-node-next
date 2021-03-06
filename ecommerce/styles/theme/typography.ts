import { utils } from './utils';

const { pxtoRex } = utils

const H3_REG = `
    font-size: ${pxtoRex(24)};
    line-height: 32px;
    font-weight: 400;
    letter-spacing: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

const PARA = `
    font-size: ${pxtoRex(10)};
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0;
    text-transform: capitalize;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    span {
        color: #f16565;
        font-weight: 400;
    }
`;

const PARA_BOLD = `
    ${PARA}
    font-weight: 700;
`;

const PARA_STRIKE = `
    ${PARA}
    font-weight: 700;
    text-decoration: line-through;
`;


const H1_REG = `
    font-size: ${pxtoRex(28)};
    line-height: 1.15;
    font-weight: 400;
    letter-spacing: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const typography = {
    H3_REG,
    PARA_BOLD,
    H1_REG,
    PARA,
    PARA_STRIKE
}