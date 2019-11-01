import Icon from "components/Icon";
import Link from "components/Link";
import Lead from "components/Lead";
import Alert from "components/Alert";
import Space from "components/Space";
import Image from "components/Image";
import Table from "components/Table";
import LinkBar from "components/LinkBar";
import Parallax from "components/Parallax";
import FullWidth from "components/FullWidth";
import Container from "components/Container";
import createHeading from "components/Heading";
import { Row, Col } from "react-bootstrap";

const components = {
  Icon,
  Container,
  Parallax,
  Space,
  FullWidth,
  Lead,
  Link,
  Image,
  LinkBar,
  Alert,
  Row,
  Col,

  // Overriding default Markdown components:
  a: Link,
  table: Table,
  h1: createHeading({ component: "h1" }),
  h2: createHeading({ component: "h2" }),
  h3: createHeading({ component: "h3" }),
  h4: createHeading({ component: "h4" }),
  h5: createHeading({ component: "h5" }),
  h6: createHeading({ component: "h6" })
};

export default components;
