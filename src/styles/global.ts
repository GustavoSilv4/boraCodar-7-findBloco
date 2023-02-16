import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${(props) => props.theme.white};
        color: ${(props) => props.theme["gray-900"]}
    }

    body, input, text-area, button {
        font-size: 1rem;
        font-family: Roboto, sans-serif;
    }
`;
