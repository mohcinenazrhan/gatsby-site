import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog - Latest Posts" />
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <article key={post.node.id}>
        {post.node.frontmatter.image && <Img fluid={post.node.frontmatter.image.childImageSharp.fluid} />}
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author} on{' '}
          {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <hr />
      </article>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date]})
    {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            image {
              childImageSharp {
                fluid (maxWidth: 300, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default BlogPage