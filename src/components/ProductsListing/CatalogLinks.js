import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SpringLink } from "../react-spring-animation"

const CatalogLinks = ({ className }) => {
  const { allShopifyCollection } = useStaticQuery(graphql`
    query {
      allShopifyCollection {
        edges {
          node {
            id
            title
            handle
          }
        }
      }
    }
  `)
  return allShopifyCollection.edges.length > 0 ? (
    <nav {...{ className }}>
      <ul>
        <li>
          <SpringLink to={`/catalog`}>All Coasters</SpringLink>
        </li>
        {allShopifyCollection.edges.map((collection) => (
          <li key={collection.node.id}>
            <SpringLink to={`/catalog/${collection.node.handle}`}>
              {collection.node.title}
            </SpringLink>
          </li>
        ))}
      </ul>
    </nav>
  ) : null
}

export default CatalogLinks
