import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

   :root {
    --background: #f0f2f5
    --red: #E52E4D;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape: #FFFFFF;
   } 


   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }


   /*
    font-size: 16px Padrão Ideal para (Desktop) 
    Utilizar medida rem : 1rem = tamanho de 1 font-size da applicação 
    ( 1rem =93.75% | 15px)
    Utilizamos percentual para respeitar a preferencia do usuario 
  */

    html {
    @media (max-width: 1080px) {
      font-size: 93.75% //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5% // 14px
    }
  }


  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

 // Thalyta precisa definir a fonte do site
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400
  }
  
  button {
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

`