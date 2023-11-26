import React, { useEffect } from "react";
import useFetch from "../hook/useFetch";
import "./products.scss";

const Products = () => {
  const { data, fetchData } = useFetch();
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      {data &&
        data.map((item) => (
          <div className="card">
            <ul key={item.id}>
              <li className="image">
                <img src={item.image} />
              </li>
              <li className="category">{item.category}</li>
              <li className="name">{item.name}</li>
              <li className="price">{item.price}</li>
            </ul>
          </div>
        ))}
    </>
  );
};

export default Products;
