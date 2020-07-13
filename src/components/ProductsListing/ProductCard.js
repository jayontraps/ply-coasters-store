import React from "react"
import styled from "@emotion/styled"
import { SpringLink } from "../react-spring-animation"
import Image from "gatsby-image"

const StyledCard = styled(SpringLink)`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  .product_card__title,
  .product__price {
    margin-bottom: 0.5rem;
  }
  .product_card__img {
    margin-bottom: 1rem;
  }
  .product__price {
    font-weight: bold;
  }
  .product_card__title {
    font-size: 1.25rem;
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
      <p className="product__price">£{firstVariant.price}</p>
    </StyledCard>
  )
}

export default ProductCard
