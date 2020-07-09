const theme = {
  mq: {
    small: "@media (max-width: 480px)",
    tabletLandscapeUp: "@media (min-width: 769px)",
    mediumOnly: "@media (min-width: 481px) and (max-width: 1028px)",
    medium: "@media (min-width: 481px)",
    large: "@media (min-width: 1029px)",
  },
  layout: {
    innerWidth: "800px",
    maxWidth: "1200px",
    productWidth: "1080px",
    width: "95%",
  },
  colors: {
    bgColor: "#F8E1B6",
    primary: "#17181A",
    slate: "#20232f",
    darkSlate: "#1f1919",
    active: "#FF9F00",
    borderColor: "rgba(75, 75, 75, .25)",
    dark_green: "#155147",
    dark_green_grey: "#454E4C",
    dark_brown: "#8B7262",
    dark_blue: "#053551",
    red: "#410C12",
    pink: "#CE917E",
  },
  fonts: {
    family: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol"`,
  },
}

export default theme
