// import React from "react";
// import { useParams } from "react-router-dom";
// import products from "../db/data"; // Import products from db/data

// function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((product) => product.id === parseInt(id));

//   if (!product) {
//     return <h1>Product not found</h1>;
//   }

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <img src={product.img} alt={product.title} />
//       <p>Star: {product.star}</p>
//       <p>Reviews: {product.reviews}</p>
//       <p>New Price: {product.newPrice}</p>
//       <p>Previous Price: {product.prevPrice}</p>
//       <p>Description: {product.description}</p>
//     </div>
//   );
// }

// export default ProductDetails;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../db/data";
import styles from "../ProductDetails/module.css"; // Import CSS module

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = parseInt(id, 10);

  if (isNaN(productId)) {
    return <h1>Invalid product ID</h1>;
  }

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className={styles.productDetails}>
      <h1>{product.title}</h1>
      <img src={product.img} alt={product.title} />
      <p>Star: {product.star}</p>
      <p>Reviews: {product.reviews}</p>
      <p>New Price: {product.newPrice}</p>
      <p>Previous Price: {product.prevPrice}</p>
      <p>Description: {product.description}</p>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        Back to Products
      </button>
    </div>
  );
}

export default ProductDetails;
