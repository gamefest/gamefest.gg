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
