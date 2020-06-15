import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <Link to="/">Home</Link>
  </Layout>
)

export default About
