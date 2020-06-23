import React from "react"
import styled from "@emotion/styled"

const StyledLeadModule = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.innerWidth};
  text-align: center;
  h1 {
    line-height: 1.2em;
    font-size: calc(36px + 44 * (100vw - 320px) / 1180);
    margin-bottom: 2rem;
  }
`

const LeadModule = () => {
  return (
    <StyledLeadModule>
      <h1>
        Handmade vintage flavour hipster retro maps Minim ullamco id tempor non
        ullamco do excepteur laborum
      </h1>
      <p>
        Cupidatat nulla labore ea ad id id ut labore et. Minim ullamco id tempor
        non ullamco do excepteur laborum. In excepteur culpa cillum excepteur
        dolor veniam commodo. Dolor ea pariatur ex laboris dolore ex aute veniam
        irure aliqua amet dolore ut occaecat. Ex ex non consectetur minim fugiat
        cupidatat laboris irure enim cupidatat mollit. Enim veniam non elit
        dolor et laboris deserunt ad eu consectetur.
      </p>
    </StyledLeadModule>
  )
}

export default LeadModule
