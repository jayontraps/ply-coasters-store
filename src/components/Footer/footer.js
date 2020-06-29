import React from "react"
import styled from "@emotion/styled"

const StyledFooter = styled.footer``

const Section = styled.div`
  position: relative;
  z-index: 99999;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.slate};
  color: white;
  padding-bottom: 3rem;
  width: ${({ theme }) => theme.layout.width};
  max-width: ${({ theme }) => theme.layout.maxWidth};
`

const Footer = () => {
  return (
    <StyledFooter>
      <Section>
        <h2>Footer</h2>
      </Section>
    </StyledFooter>
  )
}

export default Footer
