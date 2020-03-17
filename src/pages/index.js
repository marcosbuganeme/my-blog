import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import SEO from "../components/seo"
import Layout from "../components/Layout"
import PostItem from '../components/PostItem'

const IndexPage = () => {

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              background
              category
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "en-US")
              description
              title
            }
            timeToRead
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { background, category, date, description, title },
            timeToRead
          }
        }) => (
            <PostItem
              slug="/about/"
              background={background}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
            />
          )
      )}
    </Layout>
  )
}

export default IndexPage