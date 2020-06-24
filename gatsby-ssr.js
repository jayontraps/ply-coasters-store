import React from "react"
import { ThemeProvider } from "emotion-theming"
import { StoreProvider } from "./src/context/StoreContext"
import theme from "./src/theme/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <StoreProvider>{element}</StoreProvider>
  </ThemeProvider>
)
