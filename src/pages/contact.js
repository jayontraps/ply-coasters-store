import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { useTransition, animated } from "react-spring"
import Img from "gatsby-image"
import Layout from "../components/layout"
import CloseIcon from "@material-ui/icons/Close"
import SEO from "../components/seo"
import { ZoomIn } from "../components/react-spring-animation"

const StyledContent = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    position: absolute;
    z-index: 9;
    top: 50%;
    left: 50%;
    width: 600px;
    min-height: 40vh;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform-origin: center center;
    will-change: transform;
    .close_panel {
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
  }
`

const Overlay = ({ style }) => (
  <animated.div
    style={{
      position: "fixed",
      zIndex: "3",
      width: "100vw",
      height: "100vh",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(2px)",
      ...style,
    }}
  ></animated.div>
)

const StyledEvent = styled.li`
  margin: 0 0 0.5rem 0;
`

const Event = ({ event }) => {
  const { date, linkText, url, details } = event
  const DateComponent = date
  return (
    <StyledEvent className="event-li">
      <span className="event-date">
        <DateComponent />
      </span>
      {`, `}
      {linkText && (
        <span className="event-link">
          <a href={url} target="_blank">
            {linkText}
          </a>
          {`, `}
        </span>
      )}

      <span className="event-details">{details}</span>
    </StyledEvent>
  )
}

const Content = () => {
  const [showForm, setShowForm] = useState(false)
  const transitions = useTransition(!showForm, null, {
    from: { opacity: 0, transform: "translate(-50%, -50%) scale(0.5)" },
    enter: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
    leave: { opacity: 0, transform: "translate(-50%, -50%) scale(0.5)" },
  })
  const overlayTransitions = useTransition(showForm, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <>
      <StyledContent>
        {transitions.map(({ item, key, props }) =>
          item ? (
            <animated.div
              key={key}
              style={props}
              className="container content__events"
            >
              <h1>Past events</h1>
              <ul>
                {events.map((event, i) => (
                  <Event key={`event-${i}`} {...{ event }} />
                ))}
              </ul>
              <button onClick={() => setShowForm(true)} className="button">
                Say hello
              </button>
            </animated.div>
          ) : (
            <animated.div
              key={key}
              style={props}
              className="container content__contact"
            >
              <button
                onClick={() => setShowForm(false)}
                className="close_panel"
              >
                <CloseIcon />
              </button>

              <h2>Contact from</h2>
              <ul>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
              </ul>
            </animated.div>
          )
        )}
      </StyledContent>
      {overlayTransitions.map(
        ({ item, key, props }) => item && <Overlay key={key} style={props} />
      )}
    </>
  )
}

const Contact = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images-full-screen-1.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout isHomePage withHero>
      <SEO title="Conatct us" />
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "94vh",
          overflow: "hidden",
        }}
      >
        <ZoomIn>
          <Img
            fluid={image.sharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            style={{
              height: "94vh",
            }}
          />
        </ZoomIn>
      </div>

      <Content />
    </Layout>
  )
}

const events = [
  {
    date: () => (
      <>
        <span>
          Friday 22 November 12noon-7pm
          <br />
          Saturday 23 November 10am-6pm
          <br />
          Sunday 24 November 10am-5pm
        </span>
      </>
    ),
    url: "http://scandimarket.co.uk/",
    linkText: "Scandinavian Market",
    details: "Albion Street Rotherhithe",
  },
  {
    date: () => (
      <>
        <span>Saturday 30th November 10am-3pm</span>
      </>
    ),
    url: "https://weareccfm.com/locations/oval/",
    linkText: "Oval Farmers’ Market",
    details: "St Marks Church, Oval",
  },
  {
    date: () => (
      <>
        <span>Sunday 1st December</span>
      </>
    ),
    url: "",
    linkText: "",
    details: "Northcote Road Christmas Market SW11",
  },
  {
    date: () => (
      <>
        <span>Saturday 7th December</span>
      </>
    ),
    url: "https://www.pexmas.com",
    linkText: "Pexmas",
    details: "Copeland Park & Bussey Building",
  },
  {
    date: () => (
      <>
        <span>Saturday 7th December 12noon</span>
      </>
    ),
    url: "",
    linkText: "",
    details: "Brockley Cross Christmas Market",
  },
  {
    date: () => (
      <>
        <span>Sunday 8th December</span>
      </>
    ),
    url: "",
    linkText: "",
    details: "The Rookery Christmas Fair, Streatham",
  },
  {
    date: () => (
      <>
        <span>Sunday 15th December, 10am-3pm</span>
      </>
    ),
    url: "",
    linkText: "",
    details: "Horniman Christmas Market, Horniman Museum and Gardens",
  },
]

export default Contact
