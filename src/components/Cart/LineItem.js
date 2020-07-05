import React from "react"
import styled from "@emotion/styled"
import Quantity from "./Quantity"
import CloseIcon from "@material-ui/icons/Close"

const StyledLineItem = styled.div`
  display: flex;
  justify-content: space-between;
  .line-item {
    &__title {
    }

    &__price {
    }

    &__subtotal {
      font-weight: bold;
    }

    &__img {
      max-width: 120px;
    }

    &__remove {
      background-color: transparent;
    }
  }
`

const LineItem = ({
  isLoading,
  item,
  removeProductFromCart = () => {},
  updateQuantityInCart = () => {},
}) => {
  function setQuantity(quantity) {
    updateQuantityInCart({
      id: item.id,
      quantity: quantity,
    })
  }

  return (
    <StyledLineItem className="line-item">
      <div className="line-item__col">
        <img className="line-item__img" src={item.variant.image.src} alt="" />
      </div>

      <div className="line-item__col">
        <h4 className="line-item__title">{item.title}</h4>
        <span className="line-item__price">£{item.variant.price}</span>
        <Quantity
          showTitle={false}
          quantity={item.quantity}
          {...{ setQuantity, isLoading }}
        />
      </div>

      <div className="line-item__col">
        <span className="line-item__subtotal">
          £{parseFloat(item.variant.price * item.quantity).toFixed(2)}
        </span>
      </div>

      <button
        className="line-item__remove button"
        onClick={() => removeProductFromCart(item.id)}
      >
        <CloseIcon />
      </button>
    </StyledLineItem>
  )
}

export default LineItem
