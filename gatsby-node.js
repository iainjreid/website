const path = require("path");
const { createFilePath, createRemoteFileNode } = require("gatsby-source-filesystem");

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  });

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await wrapper(
    graphql(`
      query {
        allPosts: allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }

        howTo: allMarkdownRemark {
          topics: group(field: frontmatter___category) {
            totalCount
            languageName: fieldValue
            articles: nodes {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  )

  const postsList = result.data.allPosts.edges;
  const howTo = result.data.howTo;

  const postTemplate = require.resolve('./src/templates/post.jsx');
  const howToTopicTemplate = require.resolve('./src/templates/how-to-topic.jsx');

  postsList.forEach((post) => {
    createPage({
      path: `/blog${post.node.fields.slug}`,
      component: postTemplate,
      context: {
        slug: post.node.fields.slug,
      },
    })
  });

  howTo.topics.forEach((topic) => {
    createPage({
      path: `/how-to/${topic.languageName.toLowerCase()}`,
      component: howToTopicTemplate,
      context: {
        topic: topic.languageName
      },
    });

    topic.articles.forEach((article) => {
      createPage({
        path: `/how-to/${topic.languageName.toLowerCase()}${article.fields.slug}`,
        component: postTemplate,
        context: {
          slug: article.fields.slug,
        },
      });
    });
  });
}

exports.onCreateNode = async ({ node, actions:  { createNode, createNodeField }, getNode, cache, store }) => {
  switch (node.internal.type) {
    case "MarkdownRemark":
      if (node.frontmatter.featuredImage) {
        await createRemoteFileNode({
          url: node.frontmatter.featuredImage.sourceUrl,
          parentNodeId: node.id,
          createNodeId: () => node.frontmatter.featuredImage.sourceUrl,
          createNode,
          cache,
          store,
        });
      }

      return createNodeField({
        node,
        name: "slug",
        value: createFilePath({ node, getNode }),
      });
  }
}
