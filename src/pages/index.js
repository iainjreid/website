import React from "react"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import { graphql, Link } from "gatsby"
import About from "../components/About"
import Grid from "../components/Grid"
import Layout from "../components/Layout"
import CardTile from "../components/CardTile"
import colors from "../styles/colors"
import dimensions from "../styles/dimensions"

const Hero = styled("div")`
  padding-top: 2.5em;
  padding-bottom: 3em;
  margin-bottom: 6em;
  max-width: 830px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 3em;
  }

  h1 {
    margin-bottom: 1em;

    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;

      &:nth-of-type(1) {
        color: ${colors.blue500};
      }
      &:nth-of-type(2) {
        color: ${colors.orange500};
      }
      &:nth-of-type(3) {
        color: ${colors.purple500};
      }
      &:nth-of-type(4) {
        color: ${colors.green500};
      }
      &:nth-of-type(5) {
        color: ${colors.teal500};
      }

      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;

        &:nth-of-type(1) {
          color: ${colors.blue600};
          background-color: ${colors.blue200};
        }
        &:nth-of-type(2) {
          color: ${colors.orange600};
          background-color: ${colors.orange200};
        }
        &:nth-of-type(3) {
          color: ${colors.purple600};
          background-color: ${colors.purple200};
        }
        &:nth-of-type(4) {
          color: ${colors.green600};
          background-color: ${colors.green200};
        }
        &:nth-of-type(5) {
          color: ${colors.teal600};
          background-color: ${colors.teal200};
        }
      }
    }
  }
`

const Section = styled("div")`
  margin-bottom: 7em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 3em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const SectionHeading = styled("h2")`
  margin-bottom: 2em;
`

const ProjectAction = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;
  margin-left: auto;
  margin-top: 3em;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    color: ${colors.blue500};
    transition: all 150ms ease-in-out;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`

const RenderBody = ({ home, projects, meta }) => (
  <>
    <Helmet
      title={meta.title}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: "description",
          content: meta.description,
        },
        {
          property: "og:title",
          content: meta.title,
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
    <Hero>
      <h1>
        Hi there! I'm Iain, I <a href="https://github.com/iainreid820" target="_blank" rel="noopener noreferrer">write code</a>,
        make generative art, and <a href="https://twitch.tv/chaffity" target="_blank" rel="noopener noreferrer">play games</a>
      </h1>
    </Hero>
    <Section>
      <SectionHeading>Current Projects</SectionHeading>
      <Grid>
        {projects.map((project, i) => (
          <a key={i} href={project.node.url} target="_blank" rel="noopener noreferrer">
            <CardTile
              category={project.node.primaryLanguage.name}
              title={project.node.name}
              description={project.node.description}
              actionText="Checkout"
            />
          </a>
        ))}
      </Grid>
      <ProjectAction to={"/projects"}>
        View more projects <span>&#8594;</span>
      </ProjectAction>
    </Section>
    <Section>
      <h3>Abount</h3>
      <About socialLinks={home.about_links} />
    </Section>
  </>
)

export default ({ data }) => {
  const projects = data.github.user.pinnedItems.edges
  const meta = data.site.siteMetadata

  const doc = {
    node: {
      about_links: {
        Github: `https://github.com/${meta.social.github}/`,
        LinkedIn: `https://www.linkedin.com/in/${meta.social.linkedin}/`,
        Twitter: `https://twitter.com/${meta.social.twitter}/`,
        Instagram: `https://instagram.com/${meta.social.instagram}/`,
      },
    },
  }

  if (!doc || !projects) return null

  return (
    <Layout>
      <RenderBody home={doc.node} projects={projects} meta={meta} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    github {
      user(login: "iainreid820") {
        pinnedItems(first: 6) {
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
        social {
          github
          linkedin
          twitter
          instagram
        }
      }
    }
  }
`
