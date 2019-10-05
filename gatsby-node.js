const path = require("path");
const linkSchema = require("./src/components/Link/schema");

// Define custom graphql schema to enforce rigid type structures
exports.sourceNodes = ({ actions, reporter }) => {
  activity = reporter.activityTimer("implementing custom graphql schema");
  activity.start();

  const { createTypes } = actions;
  const typeDefs = `
    type DataYaml implements Node {
      leftLinks: [Link]
      rightLinks: [Link]
      gamesRoot: String
      gamesOrder: [String]
    }

    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }

    type MdxFrontmatter {
      links: [Link]
      images: [MdxImage]

      # Shared MDX file attributes
      name: String
      logo: File @fileByRelativePath

      # Game MDX file attributes
      icon: File @fileByRelativePath
      banner: File @fileByRelativePath
      slug: String

      # Sponsor MDX file attributes
      link: String
      hide: Boolean
    }

    type MdxImage {
      key: String!
      src: File! @fileByRelativePath
      selectable: Boolean
    }
  `;
  createTypes(linkSchema);
  createTypes(typeDefs);

  activity.end();
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    // Allow relative imports like "import Foo from 'components/Foo'"
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      extensions: [".js", ".jsx", ".json"]
    }
  });
};
