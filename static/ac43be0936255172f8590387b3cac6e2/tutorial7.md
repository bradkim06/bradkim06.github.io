---
layout: post
title: 'Programmiatically Create Pages from Data'
author: [bradkim06]
tags: ['gatsby']
date: '2020-08-10'
draft: false
---
This tutorial is part of a series about Gatsby’s data layer. Make sure you’ve gone through [part 4](/gatsby/dataInGatsby/), [part 5](/gatsby/tutorial5) and [part 6](/gatsby/tutorial6/) before continuing here.

Creating slugs for pages
---
We do our best to make Gatsby APIs simple to implement. To implement an API, you export a function with the name of the API from `gatsby-node.js`.
```jsx
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Node Create
exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` })
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
}

// Create Pages
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions 	
	const result = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/blog-post.js`),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug: node.fields.slug,
			},
		})
	})
}
```
`src/templates/blog-post.js`

```jsx
import React from "react"
import { graphql } from "gatsby" 
import Layout from "../components/layout"

export default function BlogPost({ data }) {
	const post = data.markdownRemark
	return (
		<Layout>
			<div>
				<h1>{post.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</div>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
	}
`
```

`src/pages/index.js`
```jsx
import React from "react"
import { Link, graphql } from "gatsby"
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
						{/* highlight-start */}
						<Link
							to={node.fields.slug}
							css={css`
								text-decoration: none;
								color: inherit;
							`}
						>
							{/* highlight-end */}
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
						</Link> {/* highlight-line */}
					</div>
				))}
			</div>
		</Layout>
	)
}

export const query = graphql`
							query {
								allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
									edges {
										node {
											id
											frontmatter {
												title
												date
											}
						{/* highlight-start */}
											fields {
												slug
											}
						{/* highlight-end */}
											excerpt
											timeToRead
											html
										}
									}
								}
							}
							`

```

Result
---
![result](../img/tutorial7_result.jpg)
