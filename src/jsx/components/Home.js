import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center my-4">
          <Col sm>
            <div className="py-3" style={{ border: "1px solid red" }}>
              <h5 className="text-center">
                <i class="bi bi-truck px-4 mx-4"></i>FREE DELIVERY
                <i class="bi bi-cash-stack px-4 mx-4"></i>
              </h5>
            </div>
          </Col>
          <Col sm>
            <div className="py-3" style={{ border: "1px solid red" }}>
              <h5 className="text-center">
                <i class="bi bi-truck px-4 mx-4"></i>MONEY BACK
                <i class="bi bi-cash-stack px-4 mx-4"></i>
              </h5>
            </div>
          </Col>
          <Col sm>
            <div className="py-3" style={{ border: "1px solid red" }}>
              <h5 className="text-center">
                <i class="bi bi-truck px-4 mx-4"></i>24/7 SUPPORT
                <i class="bi bi-cash-stack px-4 mx-4"></i>
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
