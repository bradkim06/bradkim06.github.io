---
layout: post
title: 'Data in Gatsby'
author: [bradkim06]
tags: ['gatsby']
date: '2020-08-10'
draft: false
---

Data in Gatsby
===

A website has four parts: HTML, CSS, JS, and data. The first half of the tutorial focused on the first three. Now let’s learn how to use data in Gatsby sites.

What is Data?
---
For the purpose of working in Gatsby, answer is “everything that lives outside a React component”.

If you’re building a site with WordPress (so other contributors have a nice interface for adding & maintaining content) and Gatsby, the data for the site (pages and posts) are in WordPress and you pull that data, as needed, into your components.

Data can also live in file types like Markdown, CSV, etc. as well as databases and APIs of all sorts.

 **Gatsby’s data layer lets you pull data from these (and any other source) directly into your components** — in the shape and form you want.

Do I have to use GraphQL and source plugins to pull data into Gatsby sites?
---
Absolutely not! You can use the node `createPages` API to pull unstructured data into Gatsby pages directly, rather than through the GraphQL data layer. This is a great choice for small sites, while GraphQL and source plugins can help save time with more complex sites.

See the <a href="/gatsby/withoutGraphQL">Using Gatsby without GraphQL</a> guide to learn how to pull data into your Gatsby site using the node `createPages` API and to see an example site!

Example Site
---

**Create New Gatsby**

```zsh
gatsby new tutorial-part-four https://github.com/gatsbyjs/gatsby-starter-hello-world
cd tutorial-part-four
npm install --save gatsby-plugin-typography typography react-typography typography-theme-kirkham gatsby-plugin-emotion @emotion/core
```

**gatsby-config.js**

```jsx
module.exports = {
  // highlight-start
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  // highlight-end
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```

**src/utils/typography.js**

```jsx
import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm
```

**src/components/layout.js**

```jsx
import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          Pandas Eating Lots
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  )
}
```

**src/pages/index.js**


```jsx
import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Amazing Pandas Eating Things</h1>
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
    </Layout>
  )
}
```

### Use a page query

Now the site title is available to be queried; Add it to the `about.js` file using a [page query](https://www.gatsbyjs.org/docs/page-query/):

```jsx
import React from "react"
import { graphql } from "gatsby" // highlight-line
import Layout from "../components/layout"

// highlight-next-line
export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1> {/* highlight-line */}
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

// highlight-start
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
// highlight-end
```

The basic GraphQL query that retrieves the `title` in your `about.js` changes above is:


Use a StaticQuery
===
[StaticQuery](https://www.gatsbyjs.org/docs/static-query/) is a new API introduced in Gatsby v2 that allows non-page components (like your `layout.js` component), to retrieve data via GraphQL queries. Let’s use its newly introduced hook version — [useStaticQuery](https://www.gatsbyjs.org/docs/use-static-query/).

Go ahead and make some changes to your `src/components/layout.js` file to use the `useStaticQuery` hook and a `{data.site.siteMetadata.title}` reference that uses this data. When you are done, your file will look like this:

```jsx
import React from "react"
import { css } from "@emotion/core"
// highlight-next-line
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
// highlight-start
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    // highlight-end
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title} {/* highlight-line */}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
    // highlight-start
  )
}
// highlight-end
```

Result
===
![Result img](../img/gatsby_tutorial4.jpg)

Reference
===
[Data in Gatsby](https://www.gatsbyjs.org/tutorial/part-four/)
[How To GraphQL](https://www.howtographql.com/)
