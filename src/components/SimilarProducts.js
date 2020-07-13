import React from "react"
import styled from "@emotion/styled"
import ProductCard from "../components/ProductsListing/ProductCard"

const SimilarProductsGrid = styled.div`
  width: calc(100% - ${({ theme }) => theme.spacing.gridGap});
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const SimilarProducts = ({
  style,
  className,
  collection: { node: parent },
  currentProduct,
}) => {
  const { products } = parent
  const similarProducts = products.filter(
    (product) => product.title !== currentProduct
  )
  if (!similarProducts.length) return null
  return (
    <SimilarProductsGrid {...{ className }} {...{ style }}>
      <h2>Similar products</h2>
      <div className="grid">
        {similarProducts.slice(0, 2).map((product) => (
          <ProductCard key={`product-${product.id}`} {...{ product }} />
        ))}
      </div>
    </SimilarProductsGrid>
  )
}

export default SimilarProducts
