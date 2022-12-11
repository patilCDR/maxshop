import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// "useDispatch" is used to send request to actions (like API calls etc)
// "useSelector" is used to retrieve the data from provider
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../store/actions/ProductActions";

const Products = () => {
  // Initializing "dispatch" to "useDispatch"
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const allProducts = useSelector((state) => state.products.getHomeProducts);
  console.log("allProducts", allProducts);

  // using "Dispatch" requesting data from "Actions"
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // useEffect(function () {
  //   console.log("Effect ran");
  //   fetch("https://dummyjson.com/products?limit=12")
  //     .then((res) => res.json())
  //     .catch((error) => alert("error found"))
  //     .then((response) => {
  //       // console.log(response)
  //       setData(response);
  //     });
  // }, []);

  console.log(data, Object.keys(data), Object.keys(data).length);

  return (
    <>
      {!allProducts ? (
        <h1>LOADING</h1>
      ) : (
        <Row className="p-4 text-center">
          {allProducts?.products.map((value, index) => (
            <Col>
              <Card
                className="bg-dark text-white text-center m-2"
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
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Products;
