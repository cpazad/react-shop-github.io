import React from "react";
import mobile from "../mobile.jpg";

const Product = (data) => {
  return (
    <div className="col-md-3 my-3">
      <div className="card shadow">
        <img src={mobile} alt="" />
        <div className="card-body">
          <h3>{data.productData.brand}</h3>
          <h5>{data.productData.model}</h5>
          <p>Price: {data.productData.price} Taka</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
