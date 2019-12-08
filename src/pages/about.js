import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>Hi from the About page</h1>
    <p>Welcome to our site</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default AboutPage
