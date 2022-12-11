import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { getTableData } from "../../../store/actions/TableActions";

const Table = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const allTableData = useSelector((state) => state.table.getTable);
  console.log("allTableData", allTableData);

  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/products?limit=10")
  //     .then((response) => setData(response.data));
  // }, []);

  useEffect(() => {
    dispatch(getTableData());
  }, []);

  return (
    <>
      {!allTableData ? (
        <h1>LOADING</h1>
      ) : (
        <div>
          {allTableData?.products.map((value, index) => (
            <li>{value.title}</li>
          ))}
        </div>
      )}
    </>
  );
};

export default Table;
