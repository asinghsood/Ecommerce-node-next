import styled from "styled-components";

export const Container = styled.div<{bgColor?: string}>(
  ({bgColor}) => `
    font-size: 14px;
    box-sizing: border-box;
    position: fixed;

    bottom: 12px;
    right: 12px;
    transition: transform .6s ease-in-out;
    animation: toast-in-right .7s;
`);

export const CloseButton = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  color: #fff;
`;