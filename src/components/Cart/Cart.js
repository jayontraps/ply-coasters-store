import React, { useContext, useState } from "react"
import { animated } from "react-spring"
import CloseIcon from "@material-ui/icons/Close"
import { StoreContext } from "../../context/StoreContext"

const Cart = ({ style }) => {
  const {
    // isCartOpen,
    checkout,
    toggleCartOpen,
    removeProductFromCart,
    checkCoupon,
    removeCoupon,
  } = useContext(StoreContext)

  const [coupon, setCoupon] = useState("")

  return (
    <animated.div
      style={{
        zIndex: 100,
        position: "fixed",
        top: 0,
        right: 0,
        width: "50%",
        height: "100%",
        background: "white",
        padding: "40px 2%",
        ...style,
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
        className="button"
        onClick={toggleCartOpen}
      >
        <CloseIcon />
      </button>
      <h3 className="title">Cart</h3>
      {checkout.lineItems.length > 0 ? (
        <>
          {checkout.lineItems.map((item) => (
            <div
              key={item.id}
              style={{ display: "flex", marginBottom: "2rem" }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  overflow: "hidden",
                  marginRight: 10,
                }}
              >
                <img src={item.variant.image.src} alt="" />
              </div>
              <div>
                <h4 className="title">{item.title}</h4>
                <p className="subtitle">${item.variant.price}</p>
                <p className="subtitle">Qty: {item.quantity}</p>
                <button
                  onClick={() => removeProductFromCart(item.id)}
                  className="button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div>
            {checkout.discountApplications.length > 0 ? (
              <div>
                Coupon:
                <h5 className="title">
                  {checkout.discountApplications[0].code} -{" "}
                  {checkout.discountApplications[0].value.percentage}% off
                </h5>
                <button
                  onClick={() =>
                    removeCoupon(checkout.discountApplications[0].code)
                  }
                  className="remove_btn button btn_icon"
                >
                  Remove
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  checkCoupon(coupon)
                }}
              >
                <div className="field">
                  <label aria-label="coupon" htmlFor="coupon" className="label">
                    Coupon
                  </label>
                  <input
                    className="input"
                    id="coupon"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    type="text"
                  />
                </div>
                <button className="add_coupon_btn button btn_icon">
                  Add Coupon
                </button>
              </form>
            )}
          </div>
          <hr />
          <div>
            Total: <h5 className="title">${checkout.totalPrice}</h5>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <a href={checkout.webUrl} className="buy_btn button btn_icon">
              Checkout Now
            </a>
          </div>
        </>
      ) : (
        <p>No items in cart</p>
      )}
    </animated.div>
  )
}

export default Cart
