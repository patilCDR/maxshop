import React, { useEffect, useState } from "react";

const Banner = () => {
  const [data, setData] = useState({});

  useEffect(function () {
    console.log("Effect ran");
    fetch("https://dummyjson.com/products?limit=4")
      .then((res) => res.json())
      .catch((error) => alert("error found"))
      .then((response) => {
        // console.log(response);
        setData(response);
      });
  }, []);
  console.log(
    data,
    Object.keys(data),
    Object.keys(data).length,
    Object.keys(data).length === 0
  );

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <h1>loading</h1>
      ) : (
        <ol>
          {data.products.map((value) => (
            <li key={value.id}>
              <h1>{value.title}</h1>
              <img src={value.thumbnail} alt="" />
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default Banner;
