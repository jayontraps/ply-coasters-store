import React from "react"
import { Global } from "@emotion/core"
import styled from "@emotion/styled"
import globalStyles from "../theme/global"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header/header.js"
import { MySpring } from "./react-spring-animation"

const StyledLayout = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.bgColor};
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
