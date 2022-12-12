import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Banner = () => {
  const [data, setData] = useState({});

  useEffect(function () {
    console.log("Effect ran");
    fetch("https://dummyjson.com/products?limit=3") //fetching the data from this url
      .then((res) => res.json()) //converting the fetched data in Json formate
      .catch((error) => alert("error found")) // If not throw this error
      //store the fetched data in the setData
      .then((response) => {
        // console.log(response);
        setData(response);
      });
  }, []);

  console.log(
    data,
    Object.keys(data), //getting object data
    Object.keys(data).length, // getting the object length
    Object.keys(data).length === 0
  );

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <h1>loading</h1> // show loading until the products gets load
      ) : (
        <Row className="p-4 text-center">
          {data.products.map((value, index) => (
            <Col>
              <Card
                className="bg-light text-dark text-center m-4 col-4"
                style={{ width: "20.5rem" }}
              >
                <Card.Header>{value.title}</Card.Header>
                <Card.Img
                  src={value.thumbnail}
                  alt="Card image"
                  style={{ width: "20.5rem", height: "15rem" }}
                />
                <Card.Footer className="text-muted">
                  <Button variant="dark">Go somewhere</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Banner;
