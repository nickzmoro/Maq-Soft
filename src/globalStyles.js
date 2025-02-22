import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: rgba(0, 0, 0, 0.7);
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    * {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        border: none;
    }
`;
