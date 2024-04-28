import React from 'react'
import { useState } from 'react'

export default function AddProduct() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const addProduct=async ()=>{
        console.log(name,price,category)
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId)
        let result= await fetch ('http://localhost:5000/add-product',{
            method : 'POST',
            body :JSON.stringify({name,price,category,userId}),
            headers:{"Content-Type":"application/json",
        }

        });
        let data= await result.json();
        console.log(data)
    }
  return (
    <div className='product-container'>
      <h1>Add product</h1>
      <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter product name'/>
      <input type='text' value={price}  onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter Price'/>
      <input type='text' value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder='Enter Category'/>
      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}
