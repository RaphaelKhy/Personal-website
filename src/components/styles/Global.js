import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.colors.AppBg};
    margin: 0 0 0 0;
    font-family: Sans-Serif;
    & ::selection {
    background-color: ${(props) => props.theme.colors.select};
    }
}
`;

export default GlobalStyle;