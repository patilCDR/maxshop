import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../../store/actions/ProductActions";
import { Container } from "react-bootstrap";

const ProductDetails = ({ match }) => {
  const params = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.getSingleProduct);
  console.log("product", product);

  useEffect(() => {
    dispatch(getSingleProduct(params.id));
  }, []);

  console.log("product id", params.id);
  return !product ? (
    <h1>Loading</h1>
  ) : (
    <div>
      {/* <h1>{product.title}</h1>
      <img src={product.thumbnail} alt="" /> */}
      <Card className="text-center" style={{ borderRadius: "0px" }}>
        <Card.Header>{product.title}</Card.Header>
        <Card.Body className="row">
          <div className="col">
            <Card.Img
              src={product.thumbnail}
              alt="Card image"
              style={{ width: "80Vh", height: "80Vh", borderRadius: "0px" }}
            />
          </div>
          <div className="col" style={{ lineHeight: "2rem" }}>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content. With supporting text below as a natural lead-in to
              additional content. With supporting text below as a natural
              lead-in to additional content. With supporting text below as a
              natural lead-in to additional content. With supporting text below
              as a natural lead-in to additional content. With supporting text
              below as a natural lead-in to additional content. With supporting
              text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default ProductDetails;
