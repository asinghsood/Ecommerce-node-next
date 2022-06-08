import { createGlobalStyle } from "styled-components";
import { ThemeObject } from "../types";

export const GlobalStyles = createGlobalStyle`

  html,
    body {

    background-color: #f5f6f7;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
    /* Box sizing rules */
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
    margin: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
    list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
    scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
    text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
    max-width: 100%;
    display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
    font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
    }
      body {
    background: ${({ theme }: ThemeObject) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }


/* pagination */

.pagination-container {
    display: flex;
    justify-content: center;
    list-style-type: none;
}
.pagination-container .pagination-item {
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: ${({ theme }: ThemeObject) => theme.text};
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;
}
.pagination-container .pagination-item.dots:hover {
    background-color: transparent;
    cursor: default;
}
.pagination-container .pagination-item:hover {
    background-color: ${({ theme }: ThemeObject) => theme.selected};
    cursor: pointer;
}
.pagination-container .pagination-item.selected {
    /* background-color: rgba(0, 0, 0, 0.08); */
    background-color: ${({ theme }: ThemeObject) => theme.selected};
}
.pagination-container .pagination-item .arrow::before {
    position: relative;
   /* top: 3pt;
    Uncomment this to lower the icons as requested in comments*/
    content: '';
   /* By using an em scale, the arrows will size with the font */
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid ${({ theme }: ThemeObject) => theme.text};
    border-top: 0.12em solid  ${({ theme }: ThemeObject) => theme.text};
}
.pagination-container .pagination-item .arrow.left {
    transform: rotate(-135deg) translate(-50%);
}
.pagination-container .pagination-item .arrow.right {
    transform: rotate(45deg);
}
.pagination-container .pagination-item.disabled {
    pointer-events: none;
}
.pagination-container .pagination-item.disabled .arrow::before {
    border-right: 0.12em solid ${({ theme }: ThemeObject) => theme.disabled};
    border-top: 0.12em solid ${({ theme }: ThemeObject) => theme.disabled};
}
.pagination-container .pagination-item.disabled:hover {
    background-color: transparent;
    cursor: default;
}
`;
