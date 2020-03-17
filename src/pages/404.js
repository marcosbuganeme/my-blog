import React from "react"

import SEO from "../components/seo"
import Layout from "../components/Layout"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <p>Ops... não existe essa página.</p>
  </Layout>
)

export default NotFoundPage
