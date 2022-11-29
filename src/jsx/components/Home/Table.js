import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Table = () => {
  const [data, setData] = useState({});

  useEffect(function () {
    console.log("Effect ran");
    fetch("https://dummyjson.com/products?limit=10")
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
        <Row>
          <console>
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Sl.No</th>
                  <th scope="col">title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Image</th>
                </tr>
              </thead>
              {data.products.map((value, index) => (
                <tbody>
                  <tr>
                    <th scope="row">{value.id}</th>
                    <td>{value.title}</td>
                    <td>{value.price}</td>
                    <td>
                      <img
                        src={value.thumbnail}
                        alt=""
                        style={{ height: "20px", weight: "20px" }}
                      />
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </console>
        </Row>
      )}
    </>
  );
};

export default Table;
