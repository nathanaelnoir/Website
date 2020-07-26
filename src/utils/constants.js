export const COLOR_MODE_KEY = `color-mode`

export const INITIAL_COLOR_MODE_CSS_PROP = `--initial-color-mode`

export const COLORS = {
  black: {
    almost: '#0f0f0f',
  },
  gray: {
    ultrastrong:'rgba(0,0,0,0.9)',
    ultralight:'rgba(255,255,255,0.9)',
    default: `#464849`,
    dark: `#3d3d3d`,
    darker: `#1a1d23`,
    darkest: `#060606`,
    light: `#bcbcbc`,
    lighter: `#e5e5e5`,
    lightest: `#f7f7f7`,
  },
  blue: {
    latest:'rgb(10,132,255)',
    new:'#81e9d5',
    default: `#2202a9`,
    dark: `#150956`,
    darker: `#121212`,
    ///darker: `#0a051e`,
    darkest: `#00040c`,
    light: `#1f59cd`,
    lighter: `#279AF1`,
    gruen: '#1fb9c4',
  },
  orange: {
    greenfancy:'#147c7a',
    new: '#fd8d25',
    default: `#feca2f`,
    dark: `#feb4fd`,
    darker: `#e784f9`,
    darkest: `#b554c6`,
  },
  green: {
    light: '#1fb9c4',
  },
}

const { gray, blue, orange, black } = COLORS

export const MODE_COLORS = {
  text: {
    light: `black`,
    dark: gray.lighter,
  },
  background: {
    light: `white`,
    dark: blue.darker,
  },
  shadow: {
    light: gray.lighter,
    dark: `black`,
  },
  link: {
    light: blue.light,
    dark: orange.darker,
  },
  // feet
  lightLink: {
    light: blue.lighter,
    dark: orange.darker,
  },
  accentBackground: {
    light: `rgba(0, 0, 0, 0.05)`,
    dark: `rgba(0, 0, 0, 0.3)`,
  },
  gray: {
    light: gray.regular,
    dark: gray.light,
  },
  lightGray: {
    light: gray.lightest,
    dark: gray.darker,
  },
  darkGray: {
    light: gray.default,
    dark: gray.darkest,
  },
  // lichteffect
  a: {
    light: orange.default,
    dark: orange.darkest,
  },
  //balken
  b: {
    //light: orange.dark,
    light: `white`,
    dark: black.almost,
  },
// verzeichnis??
  c: {
    light: blue.light,
    dark: blue.gruen,
  },
  d: {
    light: blue.light,
    dark: orange.greenfancy,
  },
  noir: {
    light: 'black',
    dark: `white`,
  },
  texto: {
    light: 'black',
    dark: `white`,
  },
  mobileburger: {
    light: gray.ultralight,
    dark: gray.ultrastrong,
  },
}

export const typography = {
  fonts: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
  // font sizes and line heights in em units
  minFontSize: 0.9,
  maxFontSize: 1.1,
  minLineHeight: 1.5,
  maxLineHeight: 1.8,
}
