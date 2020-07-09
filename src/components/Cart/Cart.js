import React, { useContext, useState } from "react"
import { animated } from "react-spring"
import CloseIcon from "@material-ui/icons/Close"
import { isMobile } from "react-device-detect"
import { StoreContext } from "../../context/StoreContext"
import LineItem from "./LineItem"
import StyledCart from "./StyledCart"
import { useScrollFreeze } from "../../hooks"
import Coupon from "./Coupon"
import LoadingSpinner from "../LoadingSpinner"

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
  useScrollFreeze()
  return (
    <animated.div
      style={{
        zIndex: 100,
        position: "fixed",
        overflow: "auto",
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

              <h5 className="total__title">
                Total:{" "}
                <span className="total__price">
                  {isLoading ? <LoadingSpinner /> : `£${checkout.totalPrice}`}
                </span>
              </h5>

              <div className="buy_btn_wrapper">
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
