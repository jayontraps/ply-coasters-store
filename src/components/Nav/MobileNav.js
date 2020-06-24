import React from "react"
import { animated } from "react-spring"
import StyledMobileNav from "./MobileNavStyles"
import { SpringLink } from "../react-spring-animation"

const MobileNav = ({ setMobileNav, style }) => {
  return (
    <animated.div
      style={{
        position: "fixed",
        zIndex: "9999",
        width: "100vw",
        height: "100vh",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rebeccapurple",
        ...style,
      }}
    >
      <StyledMobileNav>
        <button
          onClick={() => setMobileNav(false)}
          className="nav_close__btn button"
        >
          Close
        </button>

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

        <SpringLink activeClassName="current-page" to="/detect">
          detect
        </SpringLink>
      </StyledMobileNav>
    </animated.div>
  )
}

export default MobileNav
