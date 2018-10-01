import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper"

const NoMatch = () => (
<div>
<Wrapper>
  <Jumbotron>
  <h1>404 Page Not Found</h1>
  <h1>
    <span role="img" aria-label="Face With Rolling Eyes Emoji">
      🙄
    </span>
  </h1>
</Jumbotron>
  <Container fluid>
    <Row>
      <Col size="md-12">
      </Col>
    </Row>
  </Container>
</Wrapper>
</div>
);

export default NoMatch;