import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../../store/actions/ProductActions";

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
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductDetails;
