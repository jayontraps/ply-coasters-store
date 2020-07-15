import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProductList from "../components/ProductsListing/ProductList"
import SEO from "../components/seo"

const CatalogTemplate = ({ data }) => {
  const { shopifyCollection } = data
  return (
    <Layout>
      <SEO title={shopifyCollection.title} />
      <ProductList products={shopifyCollection.products} />
    </Layout>
  )
}

export default CatalogTemplate

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
