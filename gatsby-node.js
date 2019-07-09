const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    // Allow relative imports like "import Foo from 'components/Foo'"
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      extensions: [".js", ".jsx", ".json"]
    }
  });
};
