import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --black: #1B1C20;
    --gray-dark: #232427;
    --gray-light: #79797A;
    --green: #2FF80E;
    --orange: #F8550E;
    --pink: #E30057;
    --purple: #9F09FC;
  }

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    color: white;
    background-color:var(--gray-dark);
  }
  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;; 
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight: 600;
  }
  html, body, #root {
    scroll-behavior: smooth;
  }
  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  [disable]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
