import React from "react"
import { Global } from "@emotion/core"
import styled from "@emotion/styled"
import globalStyles from "../theme/global"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header/header.js"
import Footer from "./Footer/footer.js"
import { MySpring } from "./react-spring-animation"

const StyledLayout = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #f4e1b6;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global styles={globalStyles} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MySpring>
        <StyledLayout>{children}</StyledLayout>
      </MySpring>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
