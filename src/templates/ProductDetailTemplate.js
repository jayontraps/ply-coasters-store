import React, { useState } from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import {
  SideBySideMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers"
import Layout from "../components/layout"
import AddToCart from "../components/Cart/AddToCart"
import theme from "../theme/theme"
import { SpringLink } from "../components/react-spring-animation"
import SimilarProducts from "../components/SimilarProducts"

const {
  mq: { tabletLandscapeUp },
} = theme

const StyledProduct = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.gridGap} 0
    ${({ theme }) => theme.spacing.section} 0;
  img {
    max-width: none;
  }
  .column {
    width: 100%;
  }

  ${tabletLandscapeUp} {
    display: flex;
    .column {
      width: 50%;
      &.product__details {
        padding-left: ${({ theme }) => theme.spacing.gridGap};
      }
    }
  }

  .product__desc,
  .product__price {
    margin-bottom: 1rem;
  }

  .product__price {
    font-weight: bold;
  }
`
const StyledThumbnailNav = styled.ul`
  display: flex;
  padding: 0;
  li {
    list-style: none;
    margin-right: 10px;
    margin-top: 10px;
  }
  ${tabletLandscapeUp} {
    li:hover {
      cursor: pointer;
    }
  }
`

const StyledCollectionLink = styled.div`
  width: calc(100% - 2rem);
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: ${({ theme }) => theme.spacing.gridGap} auto 0 auto;
  .collection-link {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`

const CollectionLink = ({ collection: { node: parent } }) => (
  <StyledCollectionLink>
    <SpringLink className="collection-link" to={`/${parent.handle}`}>
      &#60; {parent.title}
    </SpringLink>
  </StyledCollectionLink>
)

const ProductDetailTemplate = ({ data }) => {
  const { shopifyProduct: product } = data
  const {
    images,
    images: [firstImage],
    variants: [firstVariant],
  } = product
  const { allShopifyCollection: collections } = data
  const parentCollection = collections.edges.length
    ? collections.edges[0]
    : null

  const firstSet = {
    small: firstImage.localFile.childImageSharp.small.src,
    large: firstImage.localFile.childImageSharp.large.src,
  }
  const [activeImage, setActiveImage] = useState(firstSet)

  return (
    <Layout>
      {parentCollection && <CollectionLink collection={parentCollection} />}
      <StyledProduct className="product">
        <div className="column">
          <div>
            <SideBySideMagnifier
              fillAvailableSpace={false}
              cursorStyle="crosshair"
              className="input-position"
              imageSrc={activeImage.small}
              imageAlt="Example"
              largeImageSrc={activeImage.large} // Optional1}
              overlayOpacity={1}
              mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK}
              touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}
            />
          </div>
          <StyledThumbnailNav>
            {images.map((image, index) => (
              <li
                onClick={() => {
                  const newImage = {
                    small: images[index].localFile.childImageSharp.small.src,
                    large: images[index].localFile.childImageSharp.large.src,
                  }
                  setActiveImage(newImage)
                }}
                key={index}
              >
                <img src={image.localFile.childImageSharp.thumb.src} alt="" />
              </li>
            ))}
          </StyledThumbnailNav>
        </div>
        <div className="column product__details">
          <h1 className="product__title">{product.title}</h1>
          <p className="product__price">£{firstVariant.price}</p>
          <p className="product__desc">{product.description}</p>
          <AddToCart variantId={firstVariant.shopifyId} />
        </div>
      </StyledProduct>
      <SimilarProducts
        style={{
          paddingBottom: theme.spacing.section,
        }}
        className="similar-products"
        currentProduct={product.title}
        collection={parentCollection}
      />
    </Layout>
  )
}

export default ProductDetailTemplate

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      handle
      title
      productType
      description
      variants {
        id
        shopifyId
        title
        price
        sku
        availableForSale
      }
      images {
        id
        localFile {
          childImageSharp {
            thumb: fluid(maxWidth: 80, maxHeight: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
            small: fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
            large: fluid(maxWidth: 1000, maxHeight: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    allShopifyCollection(
      filter: { products: { elemMatch: { handle: { eq: $handle } } } }
    ) {
      totalCount
      edges {
        node {
          title
          handle
          products {
            title
            id
            handle
            variants {
              shopifyId
              title
              price
              availableForSale
            }
            images {
              id
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
