import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing:border-box;
  }
  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.white};
  }
  body{
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.baseText};
    
    -webkit-font-smoothing: antialiased;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  @media (max-width: 880px) {
    body{
      font-size: 87.5%;
    }
    .items{
      justify-content: center;
    }
  }
`
