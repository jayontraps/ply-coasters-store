import { css } from "@emotion/core"
import theme from "./theme"

const globalStyles = () => {
  const { colors, fonts } = theme
  return css`
    * {
      box-sizing: border-box;
      margin: 0;
    }
    img {
      width: 100%;
      height: auto;
    }

    body,
    html {
      color: ${colors.primary};
      font-size: 15px;
      line-height: 1.4;
      font-family: ${fonts.family};
    }

    .button {
      appearance: none;
      border: 0;
      outline: none;
      display: block;
      padding: 1em;
      &:hover {
        cursor: pointer;
      }
    }

    ${"" /* .tl-wrapper-status--exiting {
    z-index: 100 !important;
    > div {
      position: relative;
      z-index: 100 !important;
    }
  } */}
  `
}

export default globalStyles
