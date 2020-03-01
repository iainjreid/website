import React from "react"
import Moment from "react-moment"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Image from "../components/Image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Title from "../components/Title"
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

const PostTitle = styled("div")`
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

  a {
    color: ${colors.blue700};
    text-decoration: underline;
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

export default ({ data, pageContext }) => {
  const post = data.markdownRemark

  return <>
    <SEO slug={pageContext.slug} />
    <Layout>
      <PostTitle>
        <Title text={post.frontmatter.title} />
      </PostTitle>
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
