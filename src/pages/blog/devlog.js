import React from "react"
import { graphql } from "gatsby"
import Devlog from "../../components/Devlog"
import Layout from "../../components/Layout"
import Title from "../../components/Title"

export default ({ data, pageContext }) => {
  const entries = data.Devlog.edges

  return (
    <Layout
      title={<Title text="Devlog" />}
      crumbs={pageContext.breadcrumb.crumbs}
    >
      <Devlog entries={entries} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    Devlog: allMarkdownRemark(filter: {fields: {sourceName: {eq: "devlog"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`
