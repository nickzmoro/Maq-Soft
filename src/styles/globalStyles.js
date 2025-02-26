import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #fff;
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

    html, body {
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
        width: 8px; /* Largura do scrollbar */
    }

    ::-webkit-scrollbar-track {
        background: transparent; /* Fundo do scrollbar transparente */
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.1); /* Cor da "barra" do scrollbar (semi-transparente) */
        border-radius: 4px;
    }

    /* Para Firefox */
    * {
        scrollbar-width: thin;
        scrollbar-color: rgba(0, 0, 0, 0.5) transparent; /* Barra semi-transparente e fundo transparente */
    }
`;
