import React from "react"
import StyledNav from "./styles"
// import { Link } from "gatsby"
import { SpringLink } from "../react-spring-animation"

const Nav = () => {
  return (
    <StyledNav>
      <SpringLink activeClassName="current-page" to="/">
        Home
      </SpringLink>
      <SpringLink activeClassName="current-page" to="/gallery">
        Gallery
      </SpringLink>
      <SpringLink activeClassName="current-page" to="/store">
        Store
      </SpringLink>
      <SpringLink activeClassName="current-page" to="/test">
        Test
      </SpringLink>
    </StyledNav>
  )
}

export default Nav
