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

const {
  mq: { large },
} = theme

const StyledProduct = styled.div`
  max-width: ${({ theme }) => theme.layout.productWidth};
  margin: 3rem auto;
  padding: 3rem 0;
  .column {
    width: 100%;
    padding: 1rem;
  }

  ${large} {
    display: flex;
    .column {
      width: 50%;
    }
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
`

const ProductDetailTemplate = ({ data }) => {
  const { shopifyProduct: product } = data
  const {
    images,
    images: [firstImage],
    variants: [firstVariant],
  } = product
  const firstSet = {
    small: firstImage.localFile.childImageSharp.small.src,
    large: firstImage.localFile.childImageSharp.large.src,
  }
  const [activeImage, setActiveImage] = useState(firstSet)

  return (
    <Layout>
      <StyledProduct className="product_details">
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
        <div className="column">
          <h1 className="title">{product.title}</h1>
          <p className="subtitle is-4">${firstVariant.price}</p>
          <p>{product.description}</p>
          <AddToCart variantId={firstVariant.shopifyId} />
        </div>
      </StyledProduct>
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
  }
`
