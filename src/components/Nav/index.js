import React from "react"
import StyledNav from "./styles"
import { SpringLink } from "../react-spring-animation"

const Nav = () => {
  return (
    <StyledNav>
      <SpringLink activeClassName="current-page" to="/store">
        Shop
      </SpringLink>
      <SpringLink activeClassName="current-page" to="/gallery">
        Gallery
      </SpringLink>
      <SpringLink activeClassName="current-page" to="/bar">
        Stories
      </SpringLink>
      <SpringLink activeClassName="current-page" to="/contact">
        Find us
      </SpringLink>
    </StyledNav>
  )
}

export default Nav
