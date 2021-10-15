import React, {useState} from 'react'
import Layout from '../components/layout'
import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles} from "./themes.js"


function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState("light") 

const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <ThemeProvider theme={theme == 'light'? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>Switch Theme</button>
    <Layout>
    <Component {...pageProps} />
  </Layout>
  </ThemeProvider>
  )
//   const [theme, setTheme] = useState("light") 

// const toggleTheme = () => {
//     theme == 'light' ? setTheme('dark') : setTheme('light')
// }
//   return (
//     <ThemeProvider theme={theme == 'light'? lightTheme : darkTheme}>
//     <GlobalStyles />
//     <button onClick={toggleTheme}>Switch Theme</button>
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//     </ThemeProvider>
//   )
}

export default MyApp