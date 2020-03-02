import React from "react"
import { Link, graphql } from "gatsby"
import CardColumn from "../components/CardColumn"
import Layout from "../components/Layout"
import styled from "@emotion/styled"

const Disabled = styled("div")`
  opacity: 0.8;
  pointer-events: none;
`

export default ({ data, pageContext }) => (
  <Layout title={pageContext.topic} crumbs={pageContext.breadcrumb.crumbs}>
    {data.articles.nodes.map((article, i) => (
      !article.frontmatter.draft
        ? (
          <Link key={i} to={`/how-to/${pageContext.topic.toLowerCase()}/${article.fields.slug}`}>
            <CardColumn
              title={article.frontmatter.title}
              date={article.frontmatter.date}
              description={article.excerpt}
              timeToRead={article.timeToRead}
              thumbnail={article.frontmatter.featuredImage?.sourceUrl.childImageSharp.fluid}
              actionText="View"
            />
          </Link>
        )
        : (
          <Disabled key={i}>
            <CardColumn
              title="Coming soon…"
              date={article.frontmatter.date}
              description={article.frontmatter.title}
              thumbnail={article.frontmatter.featuredImage?.sourceUrl.childImageSharp.fluid}
            />
          </Disabled>
        )
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
          draft
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
