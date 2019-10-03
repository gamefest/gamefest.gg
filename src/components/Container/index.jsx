import React from "react";
import PropTypes from "prop-types";
import { Row, Container as BootstrapContainer } from "react-bootstrap";

const Container = React.forwardRef(
  ({ row, children, as: Component = "div", ...props }, ref) => {
    return (
      <Component ref={ref} {...props}>
        <BootstrapContainer
          children={row ? <Row children={children} /> : children}
        />
      </Component>
    );
  }
);

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  row: PropTypes.bool,
  as: PropTypes.string
};

Container.defaultProps = {
  row: false
};

Container.displayName = "Container";
