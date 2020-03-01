import React from "react"
import { graphql, Link } from "gatsby"
import CardColumn from "../components/CardColumn"
import Layout from "../components/Layout"
import Title from "../components/Title"

const Blog = ({ posts, meta }) => <>
  <Layout>
    <Title text="Blog" />

    {posts.map((post, i) => (
      <Link key={i} to={`blog/${post.node.fields.slug}`}>
        <CardColumn
          key={i}
          category={post.node.frontmatter.category}
          title={post.node.frontmatter.title}
          date={post.node.frontmatter.date}
          description={post.node.excerpt}
          thumbnail={post.node.frontmatter.featuredImage?.sourceUrl.childImageSharp.fluid}
          actionText="Read"
        />
      </Link>
    ))}
  </Layout>
</>

export default ({ data }) => {
  const posts = data.allPosts.edges
  const meta = data.site.siteMetadata

  return <Blog posts={posts} meta={meta} />
}

export const pageQuery = graphql`
  query {
    allPosts: allMarkdownRemark(filter: {frontmatter: {draft: {eq: false}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date
            category
            featuredImage {
              sourceUrl {
                childImageSharp {
                  fluid {
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

    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
