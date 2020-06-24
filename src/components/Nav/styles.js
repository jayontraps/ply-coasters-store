import styled from "@emotion/styled"
import theme from "../../theme/theme"

const {
  mq: { small, medium, large },
} = theme

const StyledNav = styled.nav`
  display: none;
  ${large} {
    display: flex;
  }

  ${small} {
    background-color: black;
  }

  ${medium} {
    background-color: hotpink;
  }

  ${large} {
    background-color: blue;
  }
  a {
    color: #fff;
    text-decoration: none;
    display: inline-block;
    padding: 0.5rem;
    margin-right: 0.5rem;
    border-bottom: 2px solid transparent;
    &:hover {
      cursor: pointer;
      border-bottom: 2px solid #fff;
    }
    &.current-page {
      border-bottom: 2px solid #fff;
    }
  }
`

export default StyledNav
