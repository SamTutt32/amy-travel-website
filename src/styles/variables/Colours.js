export const standardColours = {
  black: "#000",
  charcoalGrey: "#36454F",
  white: "#FFF",
  transparentBlack: (value) => {
    return `rgba(0, 0, 0, ${value})`
  },
  transparentWhite: (value) => {
    return `rgba(255, 255, 255, ${value})`
  },
  transparent: "rgba(255, 255, 255, 0)",
}

export const brandColours = {
  primary: "#A2D2DC", // Ocean Blue
  secondary: "#333333", // Neutral Grey
  tertiary: "#F2F2F2", // Light grey
  quaternary: "#FFFDED", // Sand Yellow
}

export const elementColours = {
  textColour: standardColours.charcoalGrey,
}
