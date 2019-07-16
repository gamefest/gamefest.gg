import React from "react";
import { Container, Row } from "react-bootstrap";

function RowContainer(props) {
  return (
    <Container>
      <Row {...props} />
    </Container>
  );
}

export default RowContainer;
