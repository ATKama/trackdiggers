const path = require("path");

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = "/" + path.basename(node.fileAbsolutePath, ".md");

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error("GraphQL error in createPages:", result.errors);
    return;
  }

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    const slug = node.fields.slug;

    // 🔽 Exclure les pages non pertinentes
    if (!slug || slug.toLowerCase().includes("readme")) return;

    console.log(`✔ Creating page: /actus${slug}`);

    createPage({
      path: `/actus${slug}`,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        slug: slug,
      },
    });
  });
};