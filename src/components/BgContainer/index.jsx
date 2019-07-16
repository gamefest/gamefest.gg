import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

function BgContainer({ children, ...props }) {
  return (
    <div {...props}>
      <Container children={children} />
    </div>
  );
}

export default BgContainer;

BgContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};
