import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Product() {
  const { productId } = useParams();
  const [product, setProducts] = useState({});
  const fetchProduct = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/products/${productId}`
    );
    setProducts(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(product);
  return (
    <div>
      <p>Product : {product.title}</p>
      <p>description : {product.description}</p>
    </div>
  );
}

export default Product;
