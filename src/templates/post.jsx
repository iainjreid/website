import React from "react"
import Helmet from "react-helmet"
import Moment from "react-moment"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Image from "../components/Image"
import Layout from "../components/Layout"
import colors from "../styles/colors"

const PostHeroContainer = styled("div")`
  max-height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 3em;

  img {
    width: 100%;
  }
`

const PostCategory = styled("div")`
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  color: ${colors.grey600};

  h5 {
    margin-top: 0;
    margin-bottom: 1em;
  }
`

const PostTitle = styled("h1")`
  max-width: 680px;
  margin: 0 auto 1em;
`

const PostBody = styled("div")`
  max-width: 680px;
  margin: 0 auto;

  .block-img {
    margin-top: 3.5em;
    margin-bottom: 0.5em;

    img {
      width: 100%;
    }
  }
`

const PostMetas = styled("div")`
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 2em;
  justify-content: space-between;
  font-size: 0.85em;
  color: ${colors.grey600};
`

const PostReadingTime = styled("div")`
  margin: 0;
`

const PostDate = styled("div")`
  margin: 0;
`

export default ({ data }) => {
  const post = data.markdownRemark
  const meta = data.site.siteMetadata

  return <>
    <Helmet
      title={`${post.frontmatter.title} | Iain`}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: "description",
          content: meta.description,
        },
        {
          property: "og:title",
          content: `${post.frontmatter.title} | Iain`,
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
      <PostTitle>{post.frontmatter.title}</PostTitle>
      {/* <PostCategory>{post.frontmatter.category}</PostCategory> */}
      <PostMetas>
        <PostDate>
          Written <Moment format="MMMM D, YYYY">{post.frontmatter.date}</Moment>
        </PostDate>
        {/* <PostReadingTime>{post.timeToRead}</PostReadingTime> */}
      </PostMetas>
      {post.frontmatter.featuredImage && (
        <PostHeroContainer>
          <Image image={post.frontmatter.featuredImage} />
        </PostHeroContainer>
      )}
      <PostBody dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  </>
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug }}) {
      frontmatter {
        title
        category
        date
        featuredImage {
          sourceUrl {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          sourceName
          creditUrl
          creditName
        }
      }
      html
      timeToRead
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
