import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../db/data";
import styles from "../ProductDetails/module.css"; // Import CSS module

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Generate product ID by combining index and title
  const generateProductId = (index, title) =>
    `${index}-${title.replace(/\s+/g, "-").toLowerCase()}`;

  // Find the product using the new product ID format
  const product = products.find((product, index) => {
    const productId = generateProductId(index, product.title);
    return productId === id;
  });

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className={"productDetails"}>
      <h1>{product.title}</h1>
      <img src={product.img} alt={product.title} />
      <p>Star: {product.star}</p>
      <p>Reviews: {product.reviews}</p>
      <p>
        <strong>New Price: ${product.newPrice}</strong>
      </p>
      <p>Previous Price: {product.prevPrice}</p>
      <p>Description: {product.description}</p>
      <button onClick={() => navigate(-1)} className={"backButton"}>
        Back to Products
      </button>
    </div>
  );
}

export default ProductDetails;
