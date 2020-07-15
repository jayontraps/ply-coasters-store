import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProductGrid from "../components/ProductsListing/ProductGrid"
import theme from "../theme/theme"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const {
  mq: { tabletLandscapeUp },
} = theme

const vhValue = 66.66

const Container = styled.div`
  min-height: 100vh;
  overflow-y: hidden;
  width: 100vw;
  position: relative;
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.bgColor};
  .product-grid {
    padding-top: ${({ theme }) => theme.spacing.gridGap};
    ${tabletLandscapeUp} {
      padding-top: ${({ theme }) => theme.spacing.section};
    }
    width: calc(100% - 2rem);
    margin: 0 auto;
    max-width: ${({ theme }) => theme.layout.maxWidth};
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
      <Hero {...{ vhValue }} title={shopifyCollection.title} image={fluid} />

      <Container>
        <ProductGrid products={shopifyCollection.products} />
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
