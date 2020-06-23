import React from "react"
import styled from "@emotion/styled"

const StyledFooter = styled.footer`
  margin: 2rem auto;
`

const Section = styled.div`
  margin: 0 auto;
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
