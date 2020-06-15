import React from "react"
import { Global } from "@emotion/core"
import globalStyles from "./styles/global"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header/index.js"

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
      <div>
        <main className="section" style={{ minHeight: "90vh" }}>
          {children}
        </main>
        <footer className="footer">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
