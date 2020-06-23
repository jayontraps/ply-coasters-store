import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ZoomIn } from "../components/react-spring-animation"
// import Slider from "../components/Slider"
import ParalaxSection from "../components/ParalaxSection"

const Gallery = ({ location }) => {
  return (
    <Layout {...{ location }}>
      <SEO title="Gallery" />
      <ParalaxSection />
    </Layout>
  )
}
export default Gallery
