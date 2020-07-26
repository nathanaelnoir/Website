import { Link } from 'gatsby'
import styled from 'styled-components'
import { mediaQueries } from 'utils/mediaQueries'

export const HeaderDiv = styled.header`
  background: var(--color-b);

  position: sticky;
  top: 0;
  display: grid;
  grid-gap: calc(1em + 1vw);
  z-index: 4;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  color: var(--color-texto);
  font-size: 1.2em;
  grid-template-areas: 'nav title darkmode search';
  grid-template-columns: auto 1fr auto auto;
  border-bottom: 1px solid var(--color-noir);
  ${mediaQueries.minTablet} {
    grid-template-areas: 'title nav darkmode search';
  }
`
//2.4 em
export const Logo = styled(Link)`
  grid-area: title;
  font-size: 1.8em;
  transform: var(--color-mobileburger);
  color: inherit;
  justify-self: auto;
`
