import styled from 'styled-components'
import { mediaQueries } from 'utils/mediaQueries'
import { Gatsby, Github, Netlify, Twitter, AboutDotMe, Instagram } from 'styled-icons/simple-icons'

export const FooterDiv = styled.footer`
  background: var(--color-b);
  padding: 5vh 5vw;
  // default white
  color: var(--color-noir);
  a {
    color: var(--color-lightLink);
  }
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    'copyright'
    'source'
    'poweredBy';
  grid-gap: 4vh 6vw;
  ${mediaQueries.minPhone} {
    grid-template-areas:
      'copyright source'
      'poweredBy poweredBy';
  }
  ${mediaQueries.minTablet} {
    grid-template-areas: 'copyright source poweredBy';
  }
`

export const PoweredBy = styled.div`
  grid-area: poweredBy;
  > a {
    padding: 0 0.5em;
  }
`

export const Icons = {
  Gatsby,
  Github,
  Netlify,
  Twitter,
  AboutDotMe,
  Instagram,
}
