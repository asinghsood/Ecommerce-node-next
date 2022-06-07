import { utils } from './utils';

const { pxtoRex } = utils

const H3_REG = `
    font-size: ${pxtoRex(24)};
    line-height: 32px;
    font-weight: 400;
    letter-spacing: 0;
`;

const PARA = `
    font-size: ${pxtoRex(10)};
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0;
`;

const H1_REG = `
    font-size: ${pxtoRex(28)};
    line-height: 1.15;
    font-weight: 400;
    letter-spacing: 0;
`;

export const typography = {
    H3_REG,
    H1_REG,
    PARA
}