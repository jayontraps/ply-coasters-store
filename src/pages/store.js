import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsListing from "../components/ProductsListing/ProductsListing"
import { ZoomIn } from "../components/react-spring-animation"

const Store = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images-full-screen-3.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Store" />
      <ZoomIn>
        <Img
          backgroundColor
          fluid={image.sharp.fluid}
          style={{
            height: "100vh",
          }}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </ZoomIn>
      <div>
        <h1>Store</h1>
        <ProductsListing />
      </div>
    </Layout>
  )
}

export default Store
