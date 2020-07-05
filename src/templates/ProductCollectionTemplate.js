import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ProductCard from "../components/ProductsListing/ProductCard"
import theme from "../theme/theme"
import SEO from "../components/seo"
import { ZoomIn } from "../components/react-spring-animation"
import ScrollDown from "../components/ScrollDown"

const {
  mq: { tabletLandscapeUp },
} = theme

const isBrowser = typeof window !== "undefined"

const Container = styled.div`
  margin-top: 94vh;
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
  h1 {
    margin-bottom: 1rem;
  }
  .product-grid {
    ${tabletLandscapeUp} {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 3rem;
    }
  }
`

const StyledScrollDown = styled(ScrollDown)`
  position: absolute;
  left: calc(50% - 20px);
  top: calc(94vh - 130px);
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

  function scrollToContent() {
    if (isBrowser) {
      const theFold = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      )
      const offSet = 115

      window.scrollTo({
        top: theFold - offSet,
        behavior: "smooth",
      })
    }
  }

  return (
    <Layout withHero>
      <SEO title={shopifyCollection.title} />
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100vw",
          height: "94vh",
          overflow: "hidden",
        }}
      >
        <ZoomIn>
          <Img
            backgroundColor
            fluid={fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            style={{
              height: "94vh",
            }}
          />
        </ZoomIn>
        <StyledScrollDown onClick={scrollToContent} />
      </div>
      <Container>
        <StyledProductGrid>
          <h1>{shopifyCollection.title}</h1>
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
