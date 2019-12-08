import React from "react"
import Link from 'gatsby-link'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data, pageContext }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const { prev, next } = pageContext

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <hr />
        {prev && <Link to={prev.frontmatter.path}>Prev.</Link>}
        {' '}
        {next && <Link to={next.frontmatter.path}>Next</Link>}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`