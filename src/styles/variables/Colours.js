export const standardColours = {
  black: '#000',
  white: '#FFF',
  transparentBlack: value => {
    return `rgba(0, 0, 0, ${value})`;
  },
  transparentWhite: value => {
    return `rgba(255, 255, 255, ${value})`;
  },
  transparent: 'rgba(255, 255, 255, 0)',
};

export const brandColours = {
  primary: '#0B72B9', // Ocean Blue
  secondary: '#333333', // Neutral Grey
  tertiary: '#F2F2F2', // Light grey
  quaternary: '#E5E5E5', // Grey
  quinary: '#FFA500', // Bright Orange
};

export const elementColours = {
  textColour: brandColours.secondary,
};
