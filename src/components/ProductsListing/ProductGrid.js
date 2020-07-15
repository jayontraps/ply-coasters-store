import React from "react"
import styled from "@emotion/styled"
import ProductCard from "./ProductCard"
import theme from "../../theme/theme"

const {
  mq: { medium, tabletLandscapeUp },
} = theme

const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${medium} {
    grid-template-columns: 1fr 1fr;
  }
  ${tabletLandscapeUp} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  grid-gap: ${({ theme }) => theme.spacing.gridGap};
  width: calc(100% - 2rem);
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.maxWidth};
`
const ProductGrid = ({ products }) => {
  return products.length > 0 ? (
    <StyledProductGrid className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} {...{ product }} />
      ))}
    </StyledProductGrid>
  ) : null
}

export default ProductGrid
