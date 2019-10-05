import Icon from "components/Icon";
import Link from "components/Link";
import Lead from "components/Lead";
import Space from "components/Space";
import Image from "components/Image";
import Parallax from "components/Parallax";
import FullWidth from "components/FullWidth";
import Container from "components/Container";
import createHeading from "components/Heading";

const components = {
  Icon,
  Container,
  Parallax,
  Space,
  FullWidth,
  Lead,
  Link,
  Image,

  // Overriding default Markdown components:
  a: Link,
  h1: createHeading({ component: "h1" }),
  h2: createHeading({ component: "h2" }),
  h3: createHeading({ component: "h3" }),
  h4: createHeading({ component: "h4" }),
  h5: createHeading({ component: "h5" }),
  h6: createHeading({ component: "h6" })
};

export default components;
