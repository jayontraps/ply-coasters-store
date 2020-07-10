import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"

const Page = styled.div`
  margin-top: 100px;
  padding: 20px;
`

const Contact = () => {
  return (
    <Layout>
      <Page>
        <h1>Contact</h1>
        <ContactForm />
      </Page>
    </Layout>
  )
}

export default Contact
