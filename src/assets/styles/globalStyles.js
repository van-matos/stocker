import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

  *{
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 25px;
    overflow: hidden;
  }
 
  h1 {
    font-size: 32px;
    font-weight: 400;
  }
  
  input {
      width:100%;
      height:58px;
      text-decoration:none;
      border-radius: 5px;
      margin-bottom: 13px;
      font-size: 20px;
      font-weight: 400;
      padding: 16px;
  }
  a {
    margin-top: 34px;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
  }
  button {
      width:100%;
      height:46px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: 700;
      padding: 12px;
      cursor:pointer;
  }
`;

export default GlobalStyle;
