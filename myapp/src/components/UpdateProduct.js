import React, { useEffect } from 'react'
import { useState } from 'react'
import {useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function UpdateProduct() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const params = useParams();
    const navigate = useNavigate();


    useEffect(()=>{
      getProductDetails();
    },[]);

    const getProductDetails=async ()=>{
      console.log(params);
      let result = await fetch(`http://localhost:5000/product/${params.id}`);
      result = await result.json();
      setName(result.name);
      setPrice(result.price);
      setCategory(result.category);
    } 

    const updateProduct=async ()=>{
        console.log(name,price,category);
        let result =await fetch(`http://localhost:5000/product/${params.id}`,{
          method:"put",
          body:JSON.stringify({name,price,category}),
          headers:{
            "Content-Type":"application/json"
          }
        });
        result = await result.json();
        console.log(result);
        if(result){
          navigate("/");
          
        }

       
    }
  return (
    <div className='product-container'>
      <h1>Update product</h1>
      <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter product name'/>
      <input type='text' value={price}  onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter Price'/>
      <input type='text' value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder='Enter Category'/>
      <button onClick={updateProduct}>Update Product</button>
    </div>
  )
}
