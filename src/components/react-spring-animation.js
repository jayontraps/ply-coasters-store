import React, { useState, useEffect } from "react"
import { Spring } from "react-spring/renderprops"
import { useTransition, animated } from "react-spring"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"
// import * as easings from "d3-ease"

export const MySpring = ({ children }) => (
  <TransitionState>
    {({ transitionStatus, exit, entry }) => {
      const mount = ["entering", "entered"].includes(transitionStatus)
      const seconds = mount ? entry.length : exit.length

      return (
        <Spring
          // to={{
          //   transform: `translateX(${mount ? 0 : "100px"})`,
          //   opacity: mount ? 1 : 0,
          // }}

          from={
            {
              // transform: "translate3d(0%,0,0)",
            }
          }
          to={{
            opacity: mount ? 1 : 0,
            // transform: mount ? "translate3d(0%,0,0)" : "translate3d(75%,0,0)",
          }}
          config={{
            duration: seconds * 800,
            // easing: easings.easeCubicOut,
          }}
        >
          {(props) => <div style={props}>{children}</div>}
        </Spring>
      )
    }}
  </TransitionState>
)

export const SpringLink = ({ to, children, className, activeClassName }) => (
  <TransitionLink
    {...{ activeClassName }}
    {...{ className }}
    to={to}
    exit={{ length: 1 }}
    entry={{ length: 1 }}
  >
    {children}
  </TransitionLink>
)

export const ZoomIn = ({ children }) => {
  const [show, set] = useState(false)
  const transitions = useTransition(show, null, {
    from: { transform: "scale3d(1, 1, 1)" },
    enter: { transform: "scale3d(1.05, 1.05, 1.05)" },
    leave: { transform: "scale3d(1, 1, 1)" },
  })

  useEffect(() => {
    set(true)
  }, [])

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          {children}
        </animated.div>
      )
  )
}

export default { MySpring, SpringLink, ZoomIn }
