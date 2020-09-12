import { Component } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif !important;
    }
`;
