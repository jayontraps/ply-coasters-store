import styled from "@emotion/styled"

const StyledNav = styled.nav`
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
