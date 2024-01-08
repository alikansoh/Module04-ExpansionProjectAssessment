import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './home.css'
import {Link} from "react-router-dom"
function home() {
  const [Proudcts, setProducts] = useState([]);
  const fetchProucts = async () => {
    const response = await axios.get("http://localhost:4000/api/products/");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProucts();
  }, []);
  console.log(Proudcts);
  return (
    <div>
      <div className="allProducts">
      {Proudcts.map((product) => (
        
        <div className="product">
        <h1>Product title:{product.title}</h1>
        <h2>product description : {product.description}</h2>
        <h2>product category : {product.category.name}</h2>
        <Link to={`/api/products/${product.id}`}>
           <p className="view">  view product </p>
        </Link>
        </div>
      

      ))}
        


      </div>
    </div>
  );
}

export default home;
