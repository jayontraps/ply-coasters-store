import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useTransition } from "react-spring"
import { FaShoppingCart } from "react-icons/fa"
// import logo from "../../images/logo.svg"
import Cart from "../Cart/Cart"
import Nav from "../Nav"
import { StoreContext } from "../../context/StoreContext"
import StyledHeader from "./styles"

const Header = ({ siteTitle }) => {
  const { isCartOpen, toggleCartOpen, checkout, isLoading } = useContext(
    StoreContext
  )

  const quantity = checkout.lineItems.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  const transitions = useTransition(isCartOpen, null, {
    from: { transform: "translate3d(100%, 0, 0" },
    enter: { transform: "translate3d(0, 0, 0" },
    leave: { transform: "translate3d(100%, 0, 0" },
  })

  return (
    <StyledHeader {...{ isLoading }} className="header">
      <div className="branding">
        <Link to="/" className="branding__link">
          {/* <img src={logo} alt="Level Up Logo" className="branding__logo" /> */}
        </Link>
      </div>

      <Nav />

      <div className="cart_toggle">
        <button className="cart_toggle__btn button" onClick={toggleCartOpen}>
          {quantity > 0 && <div>{quantity}</div>}
          <FaShoppingCart />
        </button>
      </div>

      {transitions.map(
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
