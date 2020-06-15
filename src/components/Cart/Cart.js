import React, { useContext } from "react"
import { animated } from "react-spring"
import { StoreContext } from "../../context/StoreContext"

const Cart = ({ style }) => {
  const { toggleCartOpen, removeProductFromCart, checkout } = useContext(
    StoreContext
  )
  return (
    <animated.div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "50%",
        height: "100%",
        padding: "60px",
        background: "white",
        boxShadow: "var(--elevation-4)",
        ...style,
      }}
    >
      <button className="button" onClick={toggleCartOpen}>
        Close
      </button>
      <h3>Cart</h3>
      {checkout.lineItems.map(item => {
        return (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <img width="100" src={item.variant.image.src} alt={item.title} />
            <p>{item.quantity}</p>
            <p>{item.variant.price}</p>
            <button
              onClick={() => removeProductFromCart(item.id)}
              className="button"
            >
              Remove
            </button>
          </div>
        )
      })}
      <hr />
      Total: <h5 className="title">£{checkout.totalPrice}</h5>
      <div style={{ marginTop: "2rem" }}>
        <a href={checkout.webUrl} className="button is-fullwidth is-success">
          Checkout Now
        </a>
      </div>
    </animated.div>
  )
}

export default Cart
