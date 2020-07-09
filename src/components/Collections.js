import React from "react"
import styled from "@emotion/styled"
import useIsInViewport from "use-is-in-viewport"
import { SpringLink } from "./react-spring-animation"
import theme from "../theme/theme"

const {
  mq: { tabletLandscapeUp },
} = theme

const StyledCollections = styled.div`
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding: 2rem 2rem 4rem 2rem;

  .inner {
    max-width: ${({ theme }) => theme.layout.maxWidth};
    margin: 0 auto;
    ${tabletLandscapeUp} {
      .row {
        display: flex;
        justify-content: center;
      }
    }
  }
`

const CollectionCard = ({ to, title }) => {
  return (
    <SpringLink to={`/${to}`} className={`item`}>
      <div className="item_image"></div>
      <div className="item_title">{title}</div>
    </SpringLink>
  )
}

const StyledCard = styled.div`
  max-width: 300px;
  display: block;
  margin: 0 auto 2rem auto;
  &.hidden,
  &.visible {
    transition: opacity 700ms ease-out, transform 700ms ease-out;
    transition-delay: ${({ delay }) => delay}ms;
    will-change: opacity;
    opacity: 0;
    transform: ${({ withTranslate }) =>
      withTranslate ? "translateY(150px)" : "translateY(0px)"};
  }
  &.visible {
    opacity: 1;
    transform: translateY(0px);
  }

  ${tabletLandscapeUp} {
    margin: 1.5rem;
  }

  .item_image {
    padding-top: 100%;
    background-color: ${({ theme }) => theme.colors.slate};
    ${tabletLandscapeUp} {
      min-width: 240px;
    }
  }

  a {
    text-decoration: none;
  }

  .item_title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
  }
`

const Collections = ({ style }) => {
  const [firstCardInView, firstCard] = useIsInViewport()
  const firstCardInViewClass = firstCardInView ? "visible" : "hidden"
  const [secondCardInView, secondCard] = useIsInViewport()
  const secondCardInViewClass = secondCardInView ? "visible" : "hidden"
  const [thirdCardInView, thirdCard] = useIsInViewport()
  const thirdCardInViewClass = thirdCardInView ? "visible" : "hidden"
  const [fourthCardInView, fourthCard] = useIsInViewport()
  const fourthCardInViewClass = fourthCardInView ? "visible" : "hidden"
  const [fifthCardInView, fifthCard] = useIsInViewport()
  const fifthCardInViewClass = fifthCardInView ? "visible" : "hidden"
  return (
    <StyledCollections className={`collection`}>
      <div className="inner">
        <div className="row">
          <StyledCard
            delay={0}
            ref={firstCard}
            className={`${firstCardInViewClass}`}
          >
            <CollectionCard to="cork-map-coasters" title="Cork Coasters" />
          </StyledCard>
          <StyledCard
            delay={0}
            ref={secondCard}
            className={`${secondCardInViewClass}`}
          >
            <CollectionCard to="cork-map-placemats" title="Cork Placemats" />
          </StyledCard>
        </div>
        <div className="row">
          <StyledCard
            withTranslate
            delay={80}
            ref={thirdCard}
            className={`${thirdCardInViewClass}`}
          >
            <CollectionCard to="ply-map-coasters" title="Ply Map Coasters" />
          </StyledCard>
          <StyledCard
            withTranslate
            delay={160}
            ref={fourthCard}
            className={`${fourthCardInViewClass}`}
          >
            <CollectionCard to="ply-map-placemats" title="Ply Map Placemats" />
          </StyledCard>
          <StyledCard
            withTranslate
            delay={240}
            ref={fifthCard}
            className={`${fifthCardInViewClass}`}
          >
            <CollectionCard
              to="miscellaneous-ply-coasters"
              title="Miscellaneous Ply"
            />
          </StyledCard>
        </div>
      </div>
    </StyledCollections>
  )
}

export default Collections
