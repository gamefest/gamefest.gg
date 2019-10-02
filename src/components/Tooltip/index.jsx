import React from "react";
import PropTypes from "prop-types";

import { OverlayTrigger, Tooltip as BootstrapTooltip } from "react-bootstrap";

import "./style.scss";

function Tooltip({
  text,
  children,
  modifiers,
  popperConfig,
  left,
  top,
  bottom,
  hide,
  toggle,
  delay,
  ...rest
}) {
  return (
    <OverlayTrigger
      trigger={toggle ? "click" : undefined}
      placement={top ? "top" : bottom ? "bottom" : left ? "left" : "right"}
      children={children}
      popperConfig={{
        modifiers: {
          preventOverflow: {
            enabled: true,
            boundariesElement: "window"
          },
          ...modifiers
        },
        ...popperConfig
      }}
      delay={delay}
      overlay={
        <BootstrapTooltip
          bsPrefix={hide ? "hide-tooltip" : undefined}
          {...rest}
        >
          <div>{text}</div>
        </BootstrapTooltip>
      }
    />
  );
}

export default Tooltip;

Tooltip.propTypes = {
  text: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
    .isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  popperConfig: PropTypes.object,
  modifiers: PropTypes.object,
  left: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  hide: PropTypes.bool,
  toggle: PropTypes.bool,
  delay: PropTypes.number
};

Tooltip.defaultProps = {
  children: [],
  popperConfig: {},
  modifiers: {},
  left: false,
  top: false,
  bottom: false,
  hide: false,
  toggle: false
};

Tooltip.displayName = "Tooltip";
