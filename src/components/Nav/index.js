import React from "react"
import StyledNav from "./styles"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <StyledNav>
      <Link activeClassName="current-page" to="/">
        Home
      </Link>
      <Link activeClassName="current-page" to="/about">
        About
      </Link>
    </StyledNav>
  )
}

export default Nav
