import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ZoomIn } from "../components/react-spring-animation"
import StyledContainer from "./storeStyles"
import { SpringLink } from "../components/react-spring-animation"

const Image = () => {
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
    <div
      style={{
        position: "fixed",
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
  )
}

const Item = ({ to, title, image }) => (
  <SpringLink to={`/${to}`} className="item">
    <div className="item_image"></div>
    <div className="item_title">{title}</div>
  </SpringLink>
)

export default class extends React.Component {
  scroll = (to) => this.parallax.scrollTo(to)
  render() {
    return (
      <Layout>
        <SEO title="Test" />
        <StyledContainer>
          <Image />
          <Parallax
            className="container"
            ref={(node) => (this.parallax = node)}
            pages={2}
          >
            <ParallaxLayer offset={0}>
              <span className="scroll_down">
                <ExpandMoreIcon onClick={() => this.scroll(1)} />
              </span>
            </ParallaxLayer>

            <ParallaxLayer offset={1}>
              <div className="background_page"></div>
            </ParallaxLayer>

            <ParallaxLayer offset={1.1} speed={0.6}>
              <div className="collections">
                <Item to="cork-map-coasters" title="Cork Coasters" />
                <Item to="cork-map-placemats" title="Cork Placemats" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1.5} speed={1.6}>
              <div className="collections">
                <Item to="ply-map-coasters" title="Ply Map Coasters" />
                <Item to="ply-map-placemats" title="Ply Map Placemats" />
                <Item
                  to="miscellaneous-ply-coasters"
                  title="Miscellaneous Ply"
                />
              </div>
            </ParallaxLayer>
          </Parallax>
        </StyledContainer>
      </Layout>
    )
  }
}
