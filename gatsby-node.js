const path = require("path");
const SVGO = require("svgo");
const linkSchema = require("./src/components/Link/schema");
const { GraphQLString } = require(`gatsby/graphql`);
const svgToMiniDataURI = require("mini-svg-data-uri");
const filesize = require("filesize");

// SVGO Optimizer
const svgo = new SVGO({
  multipass: true,
  floatPrecision: 2,
  plugins: [
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeXMLNS: false },
    { removeEditorsNSData: true },
    { cleanupAttrs: true },
    { inlineStyles: true },
    { minifyStyles: true },
    { convertStyleToAttrs: true },
    { cleanupIDs: true },
    { prefixIds: true },
    { removeRasterImages: true },
    { removeUselessDefs: true },
    { cleanupNumericValues: true },
    { cleanupListOfValues: true },
    { convertColors: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeViewBox: false },
    { cleanupEnableBackground: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { convertShapeToPath: true },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeEmptyAttrs: true },
    { removeEmptyContainers: true },
    { mergePaths: true },
    { removeUnusedNS: true },
    { sortAttrs: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeDimensions: true },
    { removeAttrs: false },
    { removeAttributesBySelector: false },
    { removeElementsByAttr: false },
    { addClassesToSVGElement: false },
    { removeStyleElement: false },
    { removeScriptElement: false },
    { addAttributesToSVGElement: false },
    { removeOffCanvasPaths: true },
    { reusePaths: true }
  ]
});

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
      days: [ScheduleDay]
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
      prizing: GamePrizing

      # Sponsor MDX file attributes
      link: String
      hide: Boolean

      # Register MDX file attributes
      embed: String
    }

    type GamePrizing {
      places: [PrizingPlace!]
    }

    type PrizingPlace {
      place: String!
      amount: String
      items: [PrizingItem!]
    }

    type PrizingItem {
      text: String!
      quantity: Int
    }

    type MdxImage {
      key: String!
      src: File! @fileByRelativePath
      selectable: Boolean
    }

    type ScheduleDay {
      date: String!
      periods: [SchedulePeriod!]
    }

    type SchedulePeriod {
      block: ScheduleBlock!
      events: [ScheduleEvent!]
    }

    type ScheduleBlock {
      start: String!
      end: String!
    }

    type ScheduleEvent {
      name: String!
      location: String
      description: String
      descriptionMdx: File @fileByRelativePath
      cta: Link
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

async function optimizeSVG(svg) {
  const { data: optimizedSVG } = await svgo.optimize(svg);
  return optimizedSVG;
}

async function encodeSVG(svg) {
  const optimized = await optimizeSVG(svg);
  return svgToMiniDataURI(optimized);
}

async function onCreateNode({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest
}) {
  const { createNode, createParentChildLink } = actions;
  if (node.internal.mediaType !== `image/svg+xml`) {
    return;
  }

  const content = await loadNodeContent(node);

  try {
    const imageNode = {
      id: createNodeId(`${node.id} >> ImageSvg`),
      children: [],
      parent: node.id,
      internal: {
        contentDigest: node.internal.contentDigest,
        type: `ImageSvg`,
        content
      }
    };

    imageNode.internal.contentDigest = createContentDigest(imageNode);

    createNode(imageNode);
    createParentChildLink({ parent: node, child: imageNode });

    return imageNode;
  } catch (err) {
    reporter.panicOnBuild(
      `Error processing SVG Nodes ${
        node.absolutePath ? `file ${node.absolutePath}` : `in node ${node.id}`
      }:\n
      ${err.message}`
    );

    return {}; // eslint
  }
}
exports.onCreateNode = onCreateNode;

// SVG size threshold
const SVG_THRESHOLD = 20000;
function checkSize(svg, reporter, name) {
  const length = svg.length;
  // Fallback to not encoding SVG if too long
  if (length > SVG_THRESHOLD) {
    reporter.warn(
      `Skipping SVG encoding for file node "${name}" (content too large: ${filesize(
        length
      )} > ${filesize(SVG_THRESHOLD)})`
    );
    return null;
  } else return svg;
}

exports.setFieldsOnGraphQLNodeType = ({ type, reporter }) => {
  if (type.name === `ImageSvg`) {
    return {
      svg: {
        type: GraphQLString,
        resolve: source => {
          return checkSize(
            optimizeSVG(source.internal.content),
            reporter,
            source.id
          );
        }
      },
      svgURL: {
        type: GraphQLString,
        resolve: source => {
          return checkSize(
            encodeSVG(source.internal.content),
            reporter,
            source.id
          );
        }
      }
    };
  }

  // by default return empty object
  return {};
};
