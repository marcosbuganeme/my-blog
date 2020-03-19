require('dotenv').config()

const PostsQuery = `{
  posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          title
          category
          background
          description
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const flatten = array =>
  array.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest
  }))

const settings = {
  attributesToSnippet: [`excerpt:20`]
}

const queries = [
  {
    query: PostsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    settings
  }
]

module.exports = queries