---
layout: post
title: 'Source Plugin & Rendering Queried Data'
author: [bradkim06]
tags: ['gatsby']
date: '2020-08-10'
draft: false
---

Source Plugins
===
This tutorial is part of a series about Gatsby’s data layer. Make sure you’ve gone through [part 4](/gatsby/dataInGatsby/) before continuing here.

Introducing GraphiQL
---
GraphiQL is the GraphQL integrated development environment (IDE). It’s a powerful (and all-around awesome) tool you’ll use often while building Gatsby websites.

You can access it when your site’s development server is running—normally at `http://localhost:8000/___graphql`

Press `Ctrl + Space` (or use `Shift + Space` as an alternate keyboard shortcut) to bring up the autocomplete window and `Ctrl + Enter` to run the GraphQL query.

Source plugins
---
Data in Gatsby sites can come from anywhere: APIs, databases, CMSs, local files, etc.

Source plugins fetch data from their source. E.g. the filesystem source plugin knows how to fetch data from the file system. The WordPress plugin knows how to fetch data from the WordPress API.

Add `gatsby-source-filesystem` and explore how it works.

First, install the plugin at the root of the project:

`npm install --save gatsby-source-filesystem`

**gatsby-config.js** 
```jsx
module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    // highlight-start
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    // highlight-end
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
In the explorer pane, you’ll see `allFile` and `file` available as selections:

![graphiql-filesystem](../img/graphiql-filesystem.png)

get array of File “nodes” (node is a fancy name for an object in a “graph”).
![allfile-query](../img/allfile-query.png)

Build a page with a GraphQL query
---

Create a new file at `src/pages/my-files.js` with the `allFile` GraphQL query you just created:
```jsx
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function MyFiles({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
```
And now visit `http://localhost:8000/my-files/` 😲

![my-files-page](../img/my-files-page.png)
