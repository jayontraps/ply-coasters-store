import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProductCard from "../components/ProductsListing/ProductCard"
import theme from "../theme/theme"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const {
  mq: { tabletLandscapeUp },
} = theme

const viewportHeight = 66.66

const Container = styled.div`
  min-height: 100vh;
  overflow-y: hidden;
  width: 100vw;
  position: relative;
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.bgColor};
`

const StyledProductGrid = styled.div`
  width: calc(100% - 2rem);
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding-top: 3rem;
  .product-grid {
    ${tabletLandscapeUp} {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 3rem;
    }
  }
`

const ProductCategoriesTemplate = ({ data }) => {
  const { shopifyCollection } = data
  const {
    image: {
      localFile: {
        childImageSharp: { fluid },
      },
    },
  } = shopifyCollection

  return (
    <Layout withHero>
      <SEO title={shopifyCollection.title} />
      <Hero
        viewportHeight={viewportHeight}
        title={shopifyCollection.title}
        image={fluid}
      />

      <Container>
        <StyledProductGrid>
          <div className="product-grid">
            {shopifyCollection.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </StyledProductGrid>
      </Container>
    </Layout>
  )
}

export default ProductCategoriesTemplate

export const query = graphql`
  query($handle: String!) {
    shopifyCollection(handle: { eq: $handle }) {
      title
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      products {
        title
        id
        handle
        description
        productType
        variants {
          shopifyId
          title
          price
          availableForSale
        }
        images {
          id
          localFile {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
