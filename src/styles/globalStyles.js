import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #fff;
        margin: 0;
        padding: 0;
        font-family: var(--font-inter);
    }

    ::selection {
        background-color: #BEE1FF;
        color: #406381;
    }

    @media (max-width: 1150px) {
        html {
            font-size: 14px;
        }
    }

    * {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        border: none;
        scrollbar-width: thin;
        scrollbar-color: rgba(0, 0, 0, 0.5) transparent; /* Barra semi-transparente e fundo transparente */
    }

    html, body {
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    /* Variáveis globais */
    :root {
    --font-inter: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    /* Configurações de fonte */
    html {
        font-family: var(--font-inter);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    /* Garantir que todos os elementos de formulário usem a fonte correta */
    input,
    button,
    textarea,
    select {
        font-family: var(--font-inter);
    }

    /* Garantir que headings usem a fonte correta */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: var(--font-inter);
    }

    /* Garantir que links usem a fonte correta */
    a {
        font-family: var(--font-inter);
    }

    ::-webkit-scrollbar {
        width: 8px; /* Largura do scrollbar */
    }

    ::-webkit-scrollbar-track {
        background: transparent; /* Fundo do scrollbar transparente */
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.001); /* Cor da "barra" do scrollbar (semi-transparente) */
        border-radius: 4px;
    }

    .line-title {
        width: 120px;
        height: 2px;
        background-color: #406381;
    }
`;
