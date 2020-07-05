import React, { useState } from "react"

const Coupon = ({
  checkout,
  checkCoupon = () => {},
  removeCoupon = () => {},
}) => {
  const [coupon, setCoupon] = useState("")
  return checkout.discountApplications.length > 0 ? (
    <div>
      Coupon:
      <h5 className="title">
        {checkout.discountApplications[0].code} -{" "}
        {checkout.discountApplications[0].value.percentage}% off
      </h5>
      <button
        onClick={() => removeCoupon(checkout.discountApplications[0].code)}
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
      {checkout.userErrors && checkout.userErrors.length > 0 && (
        <p>{`Unable to find a coupon code matching: ${coupon}`}</p>
      )}
      <button className="add_coupon_btn button btn_icon">Add Coupon</button>
    </form>
  )
}

export default Coupon
