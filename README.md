<!---<a href="https://twitter.com/nathanaelnoir"><img src="https://raw.githubusercontent.com/nathanaelnoir/Animations/master/6b6346318dde1667d14dce0ef2dde2ba-sticker.png" title="Twitter" alt="Twitter"></a>--->


# www.nathanaelnoir.com

> Welcome to my _new_ blog! It's JavaScript from head to toe using the amazing site generator [Gatsby](https://gatsbyjs.org) and [`styled-components`](https://styled-components.com) for the design and layout. The latter relies heavily on the awesome CSS grid, by the way.



[![Netlify Status](https://api.netlify.com/api/v1/badges/e4ed12e6-407b-432e-8504-a4994d5e1c02/deploy-status)](https://app.netlify.com/sites/emolord/deploys)[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) [![Donate](https://img.shields.io/badge/$-support-ff69b4.svg?style=flat)](https://www.buymeacoffee.com/nathanaelnoir)  
[![Twitter Follow](https://img.shields.io/twitter/follow/nathanaelnoir.svg?style=social)](https://twitter.com/nathanaelnoir)


# Why Did I Do This?

When writing papers in an academic environment, the goal is to make them as compact as possible, easy and quick to read and understand. In such writings, the inclusion of as many results as possible is often more important than pointing out the path that led to those results.

This is why it is so difficult to understand papers from topics other than one's own and to find access to new fields.
With this blog I want to try to create a more _intuitive_ access for people who feel similar to me. Maybe we can find better insights into foreign fields while interacting and reading about each others works. That is my motivation and the goal of this project.


# How Did I Do This?

<div align="center">
  <p>Built with Gatsby</p>
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</div>

The site is fully responsive, built with [Gatsby](https://gatsbyjs.org), has [fluid typography](https://css-tricks.com/snippets/css/fluid-typography), relies heavily on [React Hooks](https://reactjs.org/docs/hooks-intro) for stateful function components and CSS grid for layout. It uses the following libraries:

- [**MDX**](https://mdxjs.com) for interactive content.
- [**styled-components**](https://styled-components.com) for appearance + DarkMode.
- [**KaTeX**](https://katex.org) for typesetting math.
- [**gatsby-remark-vscode**](https://gatsbyjs.org/packages/gatsby-remark-vscode) for syntax highlighting.
- [**Disqus**](https://disqus.com) for blog post comments.
- [**Algolia**](https://algolia.com) for custom search.
- [**react-spring**](https://react-spring.io) for animations.

## Installation

To get this site running locally, you need to have installed [`git`](https://git-scm.com), [`gatsby-cli`](https://gatsbyjs.org/docs/gatsby-cli) and [`yarn`](https://yarnpkg.com) (or [`npm`](https://npmjs.com)). Then follow these steps:

1. Clone the repo to your machine and change into its directory.

   ```sh
   git clone https://github.com/nathanaelnoir/Website \
   && cd blog
   ```

2. Optionally setup `git` hooks (recommended if you intend to open a PR).

   ```sh
   git config core.hooksPath src/utils/gitHooks \
   && chmod -R u+x src/utils/gitHooks
   ```

3. Install dependencies.

   ```sh
   yarn
   ```

4. Start the dev server. This may take a while on initial compilation since the site uses quite a lot of images which Gatsby creates thumbnails of and then caches.

   ```sh
   gatsby develop
   ```
