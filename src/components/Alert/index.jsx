import React, { useState } from "react";
import PropTypes from "prop-types";

import { Alert as BootstrapAlert } from "react-bootstrap";

import "./style.scss";

function Alert({ children, dismissible, ...props }) {
  const [show, setShow] = useState(true);
  return show ? (
    <BootstrapAlert
      onClose={() => (dismissible ? setShow(false) : null)}
      dismissible={dismissible}
      {...props}
    >
      {children}
    </BootstrapAlert>
  ) : null;
}

export default Alert;

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  dismissible: PropTypes.bool
};

Alert.defaultProps = {
  dismissible: false
};

Alert.displayName = "Alert";
