import React from "react"
import { ThemeProvider } from "emotion-theming"
import { StoreProvider } from "./src/context/StoreContext"
import { HeroProvider } from "./src/context/HeroContext"
import theme from "./src/theme/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <HeroProvider>
      <StoreProvider>{element}</StoreProvider>
    </HeroProvider>
  </ThemeProvider>
)
