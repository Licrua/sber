import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }
  em {
	color: white;
	padding-left: 10px;
  }
  
  p {
	font-size: 1rem;
	line-height: 1.5;
	color: black;
  }
  strong {
	color: wheat;
  }

  a {
    text-decoration: none;
    color: #0366d6;
  }

  a:hover {
    scale: 1.2;
  }

  button {
    padding: 8px 12px;
    background-color: #0366d6;
    color: white;
    border: none;
    border-radius: 4px;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 0 #2c3e50;
    cursor: pointer;
    font-size: 14px;
  }

  button:hover {
 transform: translateY(2px);
  box-shadow: 0 2px 0 #2c3e50;

  }
`;

export default GlobalStyle;
