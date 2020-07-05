import React from "react"
import styled from "@emotion/styled"

const StyledLeadModule = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.innerWidth};
  text-align: center;

  &.hidden,
  &.visible {
    transition: opacity 800ms ease-out, transform 800ms ease-out;
    will-change: opacity;
    opacity: 0;
    transform: translateY(100px);
  }
  &.visible {
    opacity: 1;
    transform: translateY(0px);
  }
  h1 {
    max-width: 500px;
    line-height: 1.2em;
    font-size: 2.5rem;
    margin: 2rem auto;
  }
  p {
    max-width: 600px;
    margin: 0 auto 2rem auto;
  }
`

const LeadModule = ({ className }) => {
  return (
    <StyledLeadModule {...{ className }}>
      <h1>Handmade vintage flavour hipster retro maps Minim ullamco</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam officiis
        incidunt officia, aliquid beatae reiciendis doloribus consequuntur
        voluptas similique inventore molestias, neque quia ut illo quasi est
        assumenda recusandae eaque.
      </p>
    </StyledLeadModule>
  )
}

export default LeadModule
