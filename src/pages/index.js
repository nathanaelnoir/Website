import PageTitle from 'components/PageTitle'
import Scroll from 'components/Scroll'
import { PageBody } from 'components/styles'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import styled, { css } from 'styled-components'
import { ArrowLeft, ArrowRight } from 'styled-icons/fa-solid'
import { mediaQueries } from 'utils/mediaQueries'
import PostList from 'views/PostList'
import { ProjectList } from 'views/Web'

export default function IndexPage({ data  }) {
  const { mdx, nathanael, posts } = data
  const img = {
    ...mdx.frontmatter.cover,
    fluid: mdx.frontmatter.cover.img.sharp.fluid,
  }
  return (
    <>
      <PageTitle img={img} css="min-height: 35em">
        <Scroll direction="down" to={1} />
      </PageTitle>
      <PageBody>
      <Img
        fixed={nathanael.img.fixed}
        css="border-radius: 100%; justify-self: center;"
      />
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <H>Recent posts</H>
        <PostList asRow noText posts={posts.nodes} />
      </PageBody>
    </>
  )
}

const Title = styled.h1`



`

const iconCss = css`
  width: 0.6em;
  vertical-align: 0;
  margin: 0 0.4em;
`

const H = ({ children, as }) => (
  <h1 as={as} css="text-align: center;">
    <ArrowLeft css={iconCss} />
    {children}
    <ArrowRight css={iconCss} />
  </h1>
)

export const query = graphql`
  {
    mdx(fileAbsolutePath: { regex: "/landing.md/" }) {
      frontmatter {
        title
        ...cover
      }
      body
    }
    nathanael: file(name: { eq: "nathanael" }) {
      img: childImageSharp {
        fixed(width: 175) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    posts: allMdx(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 5
    ) {
      nodes {
        ...page
      }
    }
  }
`
