import React from "react"
import styled from "@emotion/styled"

const StyledLeadModule = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.bgColor};
  max-width: ${({ theme }) => theme.layout.innerWidth};
  text-align: center;
  h1 {
    line-height: 1.2em;
    font-size: calc(36px + 44 * (100vw - 320px) / 1180);
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 1.5rem;
  }
`

const LeadModule = () => {
  return (
    <StyledLeadModule>
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
