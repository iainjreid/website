import React from "react"
import { Link, graphql } from "gatsby"
import CardColumn from "../components/CardColumn"
import Layout from "../components/Layout"
import Title from "../components/Title"

export default ({ data, pathContext }) => (
  <Layout>
    <Title>{pathContext.topic}</Title>
    {data.articles.nodes.map((article, i) => (
      <Link key={i} to={`/how-to/${pathContext.topic.toLowerCase()}/${article.fields.slug}`}>
        <CardColumn
          title={article.frontmatter.title}
          date={article.frontmatter.date}
          description={article.excerpt}
          timeToRead={article.timeToRead}
          thumbnail={article.frontmatter.featuredImage?.sourceUrl.childImageSharp.fluid}
          actionText="View"
        />
      </Link>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query HowToQuery($topic: String) {
    articles: allMarkdownRemark(filter: {frontmatter: {category: {eq: $topic}, collection: {eq: "How To"}}}) {
      nodes {
        frontmatter {
          title
          date
          featuredImage {
            sourceUrl {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`
