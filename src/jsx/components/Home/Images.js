import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { imageData } from "../../../services/data";

import { useSelector, useDispatch } from "react-redux";
import { getImages } from "../../../store/actions/ImageActions";

const Images = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const allImages = useSelector((state) => state.images.getImageProducts);
  console.log("allImages", allImages);

  useEffect(() => {
    dispatch(getImages());
  }, []);

  return (
    <>
      {!allImages ? (
        <h1>Loading</h1>
      ) : (
        <Row className="p-4 text-center">
          {allImages?.images.map((value, index) => (
            <Col className="d-flex justify-content-center w-100">
              <Card
                className="bg-light text-dark text-center m-4 col-4"
                style={{ width: "20.5rem" }}
              >
                <Card.Header>{value.title}</Card.Header>
                <Card.Img
                  src={value.img}
                  alt="Card image"
                  style={{ width: "100%", height: "15rem" }}
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

export default Images;
