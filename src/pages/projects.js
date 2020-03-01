import React from "react"
import { graphql } from "gatsby"
import Grid from "../components/Grid"
import Layout from "../components/Layout"
import CardTile from "../components/CardTile"
import Title from "../components/Title"

export default ({ data }) => {
  const projects = data.github.user.repositories.edges

  return (
    <Layout>
      <Title text="Projects" />
      <Grid>
        {projects.map((project, i) => (
          <a key={i} href={project.node.url} target="_blank" rel="noopener noreferrer">
            <CardTile
              category={project.node.primaryLanguage?.name}
              title={project.node.name}
              description={project.node.description}
              actionText="Checkout"
            />
          </a>
        ))}
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    github {
      user(login: "iainreid820") {
        repositories(first: 100) {
          edges {
            node {
              ... on GitHub_Repository {
                name
                description
                url
                stargazers {
                  totalCount
                }
                primaryLanguage {
                  name
                }
              }
            }
          }
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
