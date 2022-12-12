import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Category = ({ title = "Max Shop" }) => {
  return (
    <>
      <h1 className="text-center my-4">{title}</h1>
      <Container>
        <Row className="justify-content-md-center my-4">
          {infoItem.map((value, index) => (
            <Col className="mb-2" sm key={value.id}>
              <div className="categories-border py-3">
                <h5 className="text-center">
                  <i className={value.firstIcon}></i>
                  {value?.title}
                  <i className={value.secondIcon}></i>
                </h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Category;

export const infoItem = [
  {
    id: "1",
    title: "FREE DELIVERY",
    firstIcon: "bi bi-truck px-2 mx-2",
    secondIcon: "bi bi-cash-stack px-2 mx-2",
  },
  {
    id: "2",
    title: "MONEY BACK",
    firstIcon: "bi bi-truck px-2 mx-2",
    secondIcon: "bi bi-cash-stack px-2 mx-2",
  },
  {
    id: "3",
    title: "24/7 SUPPORT",
    firstIcon: "bi bi-truck px-2 mx-2",
    secondIcon: "bi bi-cash-stack px-2 mx-2",
  },
];
