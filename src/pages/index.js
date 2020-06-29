import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ZoomIn } from "../components/react-spring-animation"
import Slider from "../components/Slider"
import LeadModule from "../components/LeadModule"

const Container = styled.div`
  margin-top: 94vh;
  padding: 2rem 0;
  position: relative;
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.bgColor};
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

  const sliderImages = [
    "images-full-screen-1.jpg",
    "images-full-screen-5.jpg",
    "images-full-screen-6.jpg",
    "teacup-full-screen-compressor.jpg",
  ]

  const ImageDiv = styled("div")`
    width: 100%;
    padding-bottom: 66.66%;
    background-size: cover;
  `

  const items = sliderImages.map((img) => (
    <ImageDiv
      style={{
        backgroundImage: `url(/img/${img})`,
      }}
    />
  ))

  return (
    <Layout>
      <SEO title="Home" />
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
            fluid={image.sharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            style={{
              height: "94vh",
            }}
          />
        </ZoomIn>
      </div>
      <Container>
        <LeadModule />
        <SliderSection>
          <Slider items={items} />
        </SliderSection>
      </Container>
    </Layout>
  )
}

export default IndexPage
