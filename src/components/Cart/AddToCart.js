import React, { useState, useContext } from "react"
import styled from "@emotion/styled"
import { StoreContext } from "../../context/StoreContext"
import LoadingSpinner from "../LoadingSpinner"
import Quantity from "./Quantity"

const StyledAddToCartButton = styled.button`
  appearance: none;
  display: block;
  position: relative;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.slate};
  padding: 1rem 3rem;
  color: white;
  font-size: 1rem;
  transition: transform 150ms;
  width: 240px;
  height: 50px;
`

const AddToCart = ({ variantId }) => {
  const { addProductToCart, isLoading } = useContext(StoreContext)
  const [quantity, setQuantity] = useState(1)

  return (
    <>
      <Quantity {...{ quantity, setQuantity }} />
      <StyledAddToCartButton
        className="button"
        onClick={() => addProductToCart({ variantId, quantity })}
      >
        {isLoading ? <LoadingSpinner colorModer="light" /> : `Add to basket`}
      </StyledAddToCartButton>
    </>
  )
}

export default AddToCart
