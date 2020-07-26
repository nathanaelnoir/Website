import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { FooterDiv, PoweredBy, Icons } from './styles'
import Rss from '../Rss'

export default function Footer() {
  const { contentYaml } = useStaticQuery(graphql`
    {
      contentYaml {
        sourceNote
        copyright
        poweredBy {
          title
          url
        }
      }
    }
  `)
  const { copyright, sourceNote, poweredBy } = contentYaml
  return (
    <FooterDiv>
      <span>
        © {new Date().getFullYear()} - {copyright}
        &emsp; <Rss />
      </span>
      <span />
      <PoweredBy>
      &ensp;
        {poweredBy.map(({ url, title }) => {
          const Icon = Icons[title]
          return (
            <a key={title} href={url} aria-label={title}>
              <Icon size="1.4em" />
            </a>
          )
        })}
      </PoweredBy>
    </FooterDiv>
  )
}
