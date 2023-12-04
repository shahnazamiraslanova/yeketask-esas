
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export const Detail = () => {
const {id}=useParams()
const [product,setProduct]=useState({})
useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res=>res.json())
    .then(data=>setProduct(data))
},[])
  return (
    <div>
        <div style={{border:"1px solid gray",borderRadius:"5px",width:'50%',margin:"50px auto"}}>
            <h1 style={{textAlign:"center"}}>Product Detail</h1>
            <div style={{display:"flex",justifyContent:"space-between",border:"1px solid gray",padding:'5px 10px'}}>
            <p>Id</p>
            <p>{product.id}</p>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",border:"1px solid gray",padding:'5px 10px'}} >
            <p>Name</p>
            <p>{product.title}</p>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",border:"1px solid gray",padding:'5px 10px'}}>
            <p>Description</p>
            <p>{product.description}</p>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",border:"1px solid gray",padding:'5px 10px'}}> 
            <p>Price</p>
            <p>{product.price}</p>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",border:"1px solid gray",padding:'5px 10px'}}>
            <p>Brand</p>
            <p>{product.brand}</p>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",border:"1px solid gray",padding:'5px 10px'}}>
            <p>Stock</p>
            <p>{product.stock}</p>
            </div>
            
        </div>
        <Link to='/' style={{width:55,margin:"auto", display:"block", background:"transparent",border:"1px solid green",padding:10,borderRadius:5,color:"green"}}>Back</Link>
    </div>
  )
}
