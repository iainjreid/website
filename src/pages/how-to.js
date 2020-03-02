import React from "react"
import { graphql, Link } from "gatsby"
import Grid from "../components/Grid"
import Layout from "../components/Layout"
import CardTile from "../components/CardTile"
import SEO from "../components/SEO"

export default ({ data, pageContext }) => {
  const languages = data.allMarkdownRemark.group.sort((a, b) => a.totalCount < b.totalCount)

  return <>
    <SEO slug="/how-to" />
    <Layout title="How To" crumbs={pageContext.breadcrumb.crumbs} >
      <Grid width="4">
        {languages.map((language, i) => (
          <Link key={i} to={`how-to/${language.fieldValue.toLowerCase()}`}>
            <CardTile
              category={language.totalCount + " tutorial" + (language.totalCount > 1 ? "s" : "")}
              title={language.fieldValue}
              actionText="View"
            />
          </Link>
        ))}
      </Grid>
    </Layout>
  </>
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {collection: {eq: "How To"}}}) {
      group(field: frontmatter___category) {
        totalCount
        fieldValue
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
