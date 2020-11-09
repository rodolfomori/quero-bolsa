import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import AppProvider from './hooks'
import Routes from './routes'
import GlobalStyle from './styles/globalStyles'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
