import React from "react";
import Skeleton from '@mui/material/Skeleton';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [productArr, setProductArr] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => { setProductArr(data.products); setLoading(false) });
  }, []);

  const addToFav = (item) => {
    fetch('http://localhost:4000/favorites', {
      method: 'POST',
      body: JSON.stringify(
        item
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json)); 
  }
  const addToCart = (item) => {
    fetch('http://localhost:4000/cart', {
      method: 'POST',
      body: JSON.stringify(
        item
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json)); 
  }
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20 }}>
      {loading ? <>
        {Array.from({ length: 8 }).map(item => <div style={{ display: "flex", flexDirection: "column", width: 300, flexWrap: "wrap" }}><Skeleton variant="rectangular" width={210} height={118} />  <Skeleton variant="text" width={210} height={118} />  </div>)}
      </> :
        productArr.map((item) => (
          <div style={{ width: 300, border: "1px solid gray", margin: "20px 0", borderRadius: "10px", overflow: "hidden" }}>
            <img style={{ width: "100%", height: "200px" }} src={item.images[0]} alt="" />
            <h3 style={{ borderBottom: "1px solid rgb(241, 238, 238)", padding: 10 }}>
              {item.id}.{item.title}
            </h3>
            <h3 style={{ borderBottom: "1px solid rgb(241, 238, 238)", padding: 10 }}>
              Name:{item.title}
            </h3>
            <h4 style={{ borderBottom: "1px solid rgb(241, 238, 238)", padding: 10 }}>Price:{item.price}</h4>
            <div style={{ display: "flex", justifyContent: "space-around", alignItem: "center", margin: 10 }}>
              <Link to={`/detail/${item.id}`} style={{ background: "transparent", border: "1px solid green", padding: 10, borderRadius: 5, color: "green" }}>Details</Link>
              <button onClick={()=>addToCart(item)} style={{ background: "transparent", border: "1px solid blue", padding: 10, borderRadius: 5, color: "white", backgroundColor: "blue" }}>Add To Cart</button>
              <button onClick={()=>addToFav(item)} style={{ background: "white", border: "none", borderRadius: 5, color: "black", fontSize: "30px" }} >♡</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
