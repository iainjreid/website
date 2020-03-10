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
        Posts: allMarkdownRemark(filter: {fields: {sourceName: {eq: "posts"}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                draft
              }
            }
          }
        }

        HowTo: allMarkdownRemark(filter: {frontmatter: {collection: {eq: "How To"}}}) {
          topics: group(field: frontmatter___category) {
            totalCount
            languageName: fieldValue
            articles: nodes {
              frontmatter {
                draft
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  )

  const postTemplate = require.resolve('./src/templates/post.jsx');
  const howToTopicTemplate = require.resolve('./src/templates/how-to-topic.jsx');

  result.data.Posts.edges.forEach((post) => {
    if (post.node.frontmatter.draft && process.env.NODE_ENV !== "development") {
      return;
    }

    createPage({
      path: `/blog/posts${post.node.fields.slug}`,
      component: postTemplate,
      context: {
        slug: post.node.fields.slug,
      },
    })
  });

  result.data.HowTo.topics.forEach((topic) => {
    createPage({
      path: `/how-to/${topic.languageName.toLowerCase()}`,
      component: howToTopicTemplate,
      context: {
        topic: topic.languageName
      },
    });

    topic.articles.forEach((article) => {
      if (article.frontmatter.draft && process.env.NODE_ENV !== "development") {
        return;
      }

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

      const parent = getNode(node.parent)

      return Promise.all([
        createNodeField({
          node,
          name: "sourceName",
          value: parent.sourceInstanceName,
        }),
        createNodeField({
          node,
          name: "slug",
          value: createFilePath({ node, getNode }),
        })
      ]);
  }
}
