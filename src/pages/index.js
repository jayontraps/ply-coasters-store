import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import useIsInViewport from "use-is-in-viewport"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ZoomIn } from "../components/react-spring-animation"
import Slider from "../components/Slider"
import ScrollDown from "../components/ScrollDown"
import Collections from "../components/Collections"

const Container = styled.div`
  margin-top: 94vh;
  min-height: 100vh;
  overflow-y: hidden;
  width: 100vw;
  position: relative;
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.bgColor};
`

const StyledScrollDown = styled(ScrollDown)`
  position: absolute;
  left: calc(50% - 20px);
  top: calc(94vh - 130px);
`

const StyledLeadModule = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.innerWidth};
  text-align: center;
  overflow: auto;
  &.hidden,
  &.visible {
    transition: opacity 500ms ease-in;
    will-change: opacity;
    opacity: 0;
  }
  &.visible {
    opacity: 1;
  }
  h1 {
    max-width: 500px;
    line-height: 1.2em;
    font-size: 2.5rem;
    margin: 2rem auto;
  }
  p {
    max-width: 600px;
    margin: 0 auto;
  }
`

const isBrowser = typeof window !== "undefined"

const IndexPage = () => {
  const [isInViewport, sliderEl] = useIsInViewport({
    modTop: "100px",
  })
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "images-full-screen-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "images-full-screen-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "images-full-screen-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "images-full-screen-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

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

  const arr = [1, 2, 3, 4].map((item, index) => {
    return (
      <Img
        backgroundColor
        fluid={data[`image${item}`].childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        style={{
          height: "94vh",
        }}
      />
    )
  })

  return (
    <Layout isHomePage withHero>
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
          <Slider items={arr} />
        </ZoomIn>
        <StyledScrollDown onClick={scrollToContent} />
      </div>

      <Container>
        <StyledLeadModule className={isInViewport ? "visible" : "hidden"}>
          <h1>Handmade vintage flavour hipster retro maps Minim ullamco</h1>
          <p ref={sliderEl}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            officiis incidunt officia, aliquid beatae reiciendis doloribus
            consequuntur voluptas similique inventore molestias, neque quia ut
            illo quasi est assumenda recusandae eaque.
          </p>
        </StyledLeadModule>
        <Collections />
      </Container>
    </Layout>
  )
}

export default IndexPage
