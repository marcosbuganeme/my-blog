import React from 'react'
import { Link } from 'gatsby'

import SEO from "../components/seo"
import Layout from "../components/Layout"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About page</h1>
    <ul>
      <li>
        <Link to="/" activeStyle={{ color: 'red' }}>Home</Link>
      </li>
      <li>
        <Link to='about' activeStyle={{ color: 'red' }}>About2</Link>
      </li>
    </ul>
  </Layout>
)

export default AboutPage