import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    background: '#fafafa',
    text: '#202124', //dark grey
    color: '#aa00ff', //purple
    toggleBorder: '#FFF',
  
}

export const darkTheme = {
    background: '#040D21', //darkblue
    color: '#FF42B0', //pink
    text: '#ffffff',
    toggleBorder: '#6B8096',
  
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`