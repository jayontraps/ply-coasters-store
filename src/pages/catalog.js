import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import ProductList from "../components/ProductsListing/ProductList"

const Catalog = () => {
  const data = useStaticQuery(graphql`
    query {
      products: allShopifyProduct(sort: { fields: publishedAt, order: ASC }) {
        edges {
          node {
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
    }
  `)

  const prods = data.products.edges.map((prod) => prod.node)

  return (
    <Layout>
      <ProductList products={prods} />
    </Layout>
  )
}

export default Catalog
