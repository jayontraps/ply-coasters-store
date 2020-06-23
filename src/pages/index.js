import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ZoomIn } from "../components/react-spring-animation"
import Slider from "../components/Slider"
import LeadModule from "../components/LeadModule"

const Section = styled.div`
  margin: 0 auto;
  padding-bottom: 3rem;
  width: ${({ theme }) => theme.layout.width};
  max-width: ${({ theme }) => theme.layout.maxWidth};
`

const SliderSection = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`

const IndexPage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images-full-screen-4.jpg" }) {
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
      <SEO title="Home" />
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
      <Section>
        <LeadModule />
      </Section>
      <SliderSection>
        <Slider />
      </SliderSection>
      <Section></Section>
      <Section></Section>
      <Section></Section>
    </Layout>
  )
}

export default IndexPage
