import { css } from "@emotion/core"

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body,
  html {
    font-size: 15px;
    line-height: 1.4;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
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
`

export default globalStyles
