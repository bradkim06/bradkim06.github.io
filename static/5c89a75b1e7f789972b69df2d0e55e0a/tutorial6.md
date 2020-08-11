---
layout: post
title: 'Transformer plugins'
author: [bradkim06]
tags: ['gatsby']
date: '2020-08-10'
draft: false
---

This tutorial is part of a series about Gatsby’s data layer. Make sure you’ve gone through [part 4](/gatsby/dataInGatsby/) and [part 5](/gatsby/tutorial5) before continuing here.

Add a markdown file to your site at  
`src/pages/sweet-pandas-eating-sweets.md`  

```markdown
---
title: "Sweet Pandas Eating Sweets"
date: "2017-08-10"
---

Pandas are really sweet.

Here's a video of a panda eating sweets.

<iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe>
```

`src/pages/pandas-and-bananas.md`

```markdown
---
title: "Pandas and Bananas"
date: "2017-08-21"
---

Do Pandas eat bananas? Check out this short video that shows that yes! pandas do seem to really enjoy bananas!

<iframe width="560" height="315" src="https://www.youtube.com/embed/4SZl1r2O_bY" frameborder="0" allowfullscreen></iframe>
```

Add a transformer plugin that can transform markdown files:  
`npm install --save gatsby-transformer-remark`

Then add it to the `gatsby-config.js` like normal:

```jsx
module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`, // highlight-line
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

Restart the development server then refresh (or open again) GraphiQL and look at the autocomplete:

![markdown-autocomplete](../img/markdown-autocomplete.png)

Select `allMarkdownRemark` again and run it as you did for `allFile`. You’ll see there the markdown file you recently added. Explore the fields that are available on the `MarkdownRemark` node.

![markdown-query](../img/markdown-query.png)

Create a list of your site’s markdown files
---

`src/pages/index.js`

```jsx
import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
```
Result
---
![two-posts](../img/two-posts.png)
