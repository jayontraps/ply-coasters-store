import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ZoomIn } from "../components/react-spring-animation"

const Contact = ({ location }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images-full-screen-1.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout withHero>
      <SEO title="Contact" />
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
        <h1>Contact</h1>
        <p>
          Eu commodo nisi deserunt exercitation consequat cillum ad irure duis
          fugiat elit. Et cupidatat nulla ea excepteur eiusmod excepteur laborum
          magna adipisicing consectetur fugiat. Duis aliquip cillum qui eu
          commodo commodo labore ex adipisicing irure nisi sit ex dolore.
          Occaecat nisi ipsum quis deserunt minim cillum quis.
        </p>
      </div>
    </Layout>
  )
}

export default Contact
