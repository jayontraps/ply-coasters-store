import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { useTransition } from "react-spring"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import MenuIcon from "@material-ui/icons/Menu"
import logo from "../../../images/logo-shapes-plus-words-2.svg"
import Cart from "../Cart/Cart"
import Nav from "../Nav"
import MobileNav from "../Nav/MobileNav"
import { StoreContext } from "../../context/StoreContext"
import StyledHeader from "./styles"
import { SpringLink } from "../react-spring-animation"
import { useBelowTheFold } from "../../hooks"

const Header = ({ siteTitle, isHomePage }) => {
  const [mobileNav, setMobileNav] = useState(false)
  const { toggleCartOpen, checkout, isLoading, isCartOpen } = useContext(
    StoreContext
  )

  const quantity = checkout.lineItems.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  const cartTransitions = useTransition(isCartOpen, null, {
    from: { transform: "translate3d(100%, 0, 0" },
    enter: { transform: "translate3d(0, 0, 0" },
    leave: { transform: "translate3d(100%, 0, 0" },
  })

  const mobileNavTransitions = useTransition(mobileNav, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const belowTheFold = useBelowTheFold(false)

  return (
    <StyledHeader
      {...{ isLoading, belowTheFold, isHomePage }}
      className="header"
    >
      <SpringLink to="/" className="branding__link">
        <img src={logo} alt="Level Up Logo" className="branding__logo" />
      </SpringLink>

      <Nav />
      {mobileNavTransitions.map(
        ({ item, key, props }) =>
          item && (
            <MobileNav key={key} style={props} setMobileNav={setMobileNav} />
          )
      )}
      <div className="btn_group">
        <button
          onClick={() => setMobileNav(true)}
          className="nav_toggle__btn btn_icon header_btn"
        >
          <MenuIcon />
        </button>
        <button
          className="cart_toggle__btn btn_icon header_btn"
          onClick={toggleCartOpen}
        >
          {quantity > 0 && (
            <div className="cart_toggle__quantity">
              <span>{quantity}</span>
            </div>
          )}
          <ShoppingBasketIcon />
        </button>
      </div>

      {cartTransitions.map(
        ({ item, key, props }) => item && <Cart key={key} style={props} />
      )}
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
