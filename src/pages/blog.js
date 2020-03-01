import React from "react"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import CardColumn from "../components/CardColumn"
import Layout from "../components/Layout"
import Title from "../components/Title"

const Blog = ({ posts, meta }) => (
  <>
    <Helmet
      title={"Blog | Iain"}
      titleTemplate={"%s | Blog | Iain"}
      meta={[
        {
          name: "description",
          content: meta.description,
        },
        {
          property: "og:title",
          content: "Blog | Iain",
        },
        {
          property: "og:description",
          content: meta.description,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: meta.author,
        },
        {
          name: "twitter:title",
          content: meta.title,
        },
        {
          name: "twitter:description",
          content: meta.description,
        },
      ].concat(meta)}
    />
    <Layout>
      <Title>Blog</Title>
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
)

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
