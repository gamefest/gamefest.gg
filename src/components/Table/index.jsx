import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

function Table(props) {
  return (
    <div className="table-responsive-lg table-outer">
      <table {...props} className="table table-striped" />
    </div>
  );
}

export default Table;

Table.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

Table.defaultProps = {};

Table.displayName = "Table";
