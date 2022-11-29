import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Products = () => {
  const [data, setData] = useState({});

  useEffect(function () {
    console.log("Effect ran");
    fetch("https://dummyjson.com/products?limit=12")
      .then((res) => res.json())
      .catch((error) => alert("error found"))
      .then((response) => {
        // console.log(response)
        setData(response);
      });
  }, []);

  console.log(data, Object.keys(data), Object.keys(data).length);

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <h1>LOADING</h1>
      ) : (
        <Row className="p-4 text-center">
          {data.products.map((value, index) => (
            <Card
              className="bg-dark text-white text-center m-2 col-4"
              style={{ width: "18rem" }}
            >
              <Card.Header>{value.title}</Card.Header>
              <Card.Img
                src={value.thumbnail}
                alt="Card image"
                style={{ width: "17rem", height: "15rem" }}
              />
              <Card.Footer className="text-muted">
                <Button variant="light">Go somewhere</Button>
              </Card.Footer>
            </Card>
          ))}
        </Row>
      )}
    </>
  );
};

export default Products;
