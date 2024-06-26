import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products",{
      headers:{
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth'))}`
      }
    });
    result = await result.json();
    setProducts(result);
  };
  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "delete",
      headers:{
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth'))}`
      }
    });
    result = await result.json();
    console.log(result);
    if (result) {
      alert("Product Deleted");
      getProducts();
    }
  };
  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`,{
        headers:{
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth'))}`
        }
      });
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };
  return (
    <div className="products-list">
      <h1>Product List</h1>
      <input type="text" placeholder="Search Product" onChange={searchHandle} />
      <ul>
        <li>S .No</li>
        <li>Name</li>
        <li>Price </li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {products.length > 0 ? (
        products.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>
              <button onClick={() => deleteProduct(item._id)}>Delete</button>
              <Link to={`/update/${item._id}`}>Update</Link>
            </li>
          </ul>
        ))
      ) : (
        <h1>No Product Found </h1>
      )}
    </div>
  );
}
