import React from "react"
import styled from "@emotion/styled"
import { SpringLink } from "../react-spring-animation"
import Image from "gatsby-image"

const StyledCard = styled(SpringLink)`
  display: block;
  text-decoration: none;
  .product_card__title {
    padding: 0.5rem;
    text-align: center;
  }
  .product_card__img {
  }
`

const ProductCard = ({ product }) => {
  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product
  return (
    <StyledCard
      className="product_card"
      to={`/product/${product.handle}`}
      style={{ display: "block", marginBottom: "2rem", width: "300px" }}
    >
      <Image
        className="product_card__img"
        fluid={firstImage.localFile.childImageSharp.fluid}
      />
      <h3 className="product_card__title">{product.title}</h3>
    </StyledCard>
  )
}

export default ProductCard
