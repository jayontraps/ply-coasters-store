import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { Transition, animated } from "react-spring/renderprops"
import { useKeyPress } from "../hooks"

/* eslint-disable */
const TestScreen = styled("div")`
  width: 100%;
  padding-bottom: 66.66%;
  background-size: cover;
  /* height: 100%; */
`

function TestScreen1(props) {
  return (
    <TestScreen
      style={{
        backgroundImage: "url(/img/images-full-screen-1.jpg)",
      }}
    />
  )
}

function TestScreen2(props) {
  return (
    <TestScreen
      style={{
        backgroundImage: "url(/img/images-full-screen-5.jpg)",
      }}
    />
  )
}

function TestScreen3(props) {
  return (
    <TestScreen
      style={{
        backgroundImage: "url(/img/images-full-screen-6.jpg)",
      }}
    />
  )
}

function TestScreen4(props) {
  return (
    <TestScreen
      style={{
        backgroundImage: "url(/img/teacup-full-screen-compressor.jpg)",
      }}
    />
  )
}

const testScreens = [TestScreen1, TestScreen2, TestScreen3, TestScreen4]

const Container = styled("div")`
  /* min-height: 600px;
  height: 80vh; */

  /* width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth}; */

  padding-bottom: 66.66%;
  overflow: hidden;
  margin: 0 auto;  
  background-color: #000;
  position: relative;
  
  & > div {
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
  }

  button {
    position: absolute;
    top: calc(50% - 1rem);
    &.next {
      right: 3rem;
    }
    &.prev {
      left: 3rem;
    }
    &::hover {
      cursor: pointer;
    }
  }
`

const SliderNav = styled("ul")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 2rem;
  margin: 0;
  padding: 0;
  li {
    display: block;
    background-color: rgba(255, 255, 255, 0.5);
    width: 2rem;
    height: 2rem;
    margin: 0 1rem;
    &:hover {
      cursor: pointer;
    }
  }
`

const FORWARD = "forward"
const BACKWARD = "backward"

const Slider = () => {
  const [direction, setDirection] = useState("init")
  const [index, setIndex] = useState(0)
  const ArrowRight = useKeyPress("ArrowRight")
  const ArrowLeft = useKeyPress("ArrowLeft")

  function move(e, dir) {
    e.preventDefault()
    if (dir === "next") {
      setDirection(FORWARD)
      setIndex(index === testScreens.length - 1 ? 0 : index + 1)
    } else {
      setDirection(BACKWARD)
      setIndex(index > 0 ? index - 1 : 0)
    }
  }

  function handleNavClick(i) {
    if (i === index) return false
    setDirection(i < index ? BACKWARD : FORWARD)
    setIndex(i)
  }

  useEffect(() => {
    if (ArrowLeft) {
      const newIndex = index > 0 ? index - 1 : 0
      setDirection(BACKWARD)
      setIndex(newIndex)
    }
    if (ArrowRight) {
      const newIndex = index === testScreens.length - 1 ? index : index + 1
      setDirection(FORWARD)
      setIndex(newIndex)
    }
  }, [ArrowRight, ArrowLeft])

  return (
    <div>
      <Container className="slider">
        <Transition
          native
          reset
          unique
          items={index}
          from={{
            opacity: 0.5,
            transform:
              direction === "init"
                ? "translate3d(0%, 0, 0)"
                : direction === FORWARD
                ? "translate3d(50%, 0 ,0)"
                : "translate3d(-50%, 0 ,0)",
          }}
          enter={{
            opacity: 1,
            transform: "translate3d(0%, 0, 0)",
          }}
          leave={{
            opacity: 0.5,
            transform:
              direction === FORWARD
                ? "translate3d(-25%, 0, 0)"
                : "translate3d(+25%, 0, 0)",
          }}
          // config={{
          //   duration: 8000,
          //   // easing: easings.easeCubicOut,
          // }}
        >
          {(index) => (style) => (
            <animated.div style={{ ...style }}>
              {React.createElement(testScreens[index])}
            </animated.div>
          )}
        </Transition>

        <button
          className="prev"
          disabled={index === 0}
          onClick={(e) => move(e, "prev")}
        >
          Prev
        </button>
        <button
          className="next"
          disabled={index === testScreens.length - 1}
          onClick={(e) => move(e, "next")}
        >
          Next
        </button>
        <SliderNav>
          {testScreens.map((screen, i) => {
            return (
              <li key={`slider-nav-${i}`} onClick={() => handleNavClick(i)} />
            )
          })}
        </SliderNav>
      </Container>
    </div>
  )
}

export default Slider
/* eslint-enable */
