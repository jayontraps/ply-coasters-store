import React, { useContext, useState } from "react"
import { animated } from "react-spring"
import CloseIcon from "@material-ui/icons/Close"
import { isMobile } from "react-device-detect"
import { StoreContext } from "../../context/StoreContext"
import LineItem from "./LineItem"
import StyledCart from "./StyledCart"
// import { useScrollFreeze } from "../../hooks"
import Coupon from "./Coupon"

const Cart = ({ style }) => {
  const {
    isLoading,
    checkout,
    toggleCartOpen,
    removeProductFromCart,
    updateQuantityInCart,
    checkCoupon,
    removeCoupon,
  } = useContext(StoreContext)

  return (
    <animated.div
      style={{
        zIndex: 100,
        position: "fixed",
        top: 0,
        right: 0,
        width: isMobile ? "100%" : "50%",
        height: "100%",
        ...style,
      }}
    >
      <StyledCart>
        <div className="cart__header">
          <h3 className="title">Your cart</h3>
        </div>
        <button
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            top: "0",
            right: "0",
          }}
          className="button"
          onClick={toggleCartOpen}
        >
          <CloseIcon />
        </button>

        {checkout.lineItems.length > 0 ? (
          <>
            <div className="cart__line_items">
              {checkout.lineItems.map((item) => (
                <LineItem
                  key={item.id}
                  {...{
                    item,
                    removeProductFromCart,
                    updateQuantityInCart,
                    isLoading,
                  }}
                />
              ))}
            </div>

            <div className="cart__footer">
              <Coupon {...{ checkout, checkCoupon, removeCoupon }} />
              <hr />
              <div>
                Total: <h5 className="title">${checkout.totalPrice}</h5>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <a href={checkout.webUrl} className="buy_btn button btn_icon">
                  Checkout
                </a>
              </div>
            </div>
          </>
        ) : (
          <p>No items in cart</p>
        )}
      </StyledCart>
    </animated.div>
  )
}

export default Cart
