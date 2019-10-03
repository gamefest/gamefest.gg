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
      # Game MDX file attributes
      name: String
      icon: File @fileByRelativePath
      banner: File @fileByRelativePath
      logo: File @fileByRelativePath
      slug: String
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
