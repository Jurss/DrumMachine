import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    body{
        transition: linear 0.2s;
        color : ${props=>props.theme.mainColor};
        background-color : ${props=>props.theme.backgroundColor};
    }
`;

export default GlobalStyle;