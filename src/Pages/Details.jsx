import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const getProduct = async () => {
    const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    console.log(data)
    setProduct(data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      {/* modified1---- src={product?.image} */}
      <img
        src={product?.image}
        className="max-w-sm rounded-lg shadow-2xl"
      />
      <div>
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae
          et a id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div></div>
  )
}

export default Details

//dt1 create detail file

// dt2
        
{/* <Route
          path="/products/detail/:id"
          element={
            <Guard>
              <Detail />
            </Guard>
          }
        /> */}

        
        // dt3 go to card.jsx and write onClick={goDetails}
 // const navigate = useNavigate();
  // const goDetails = (e) => {
  //   e.stopPropagation();
  //   navigate(`/products/details/${product?.id}`);
  // };
// <div  onClick={goDetails} className="card w-96 bg-white shadow-xl">
  // <div className="card-body">

  // dt4 write in detail.jsx
  // const Details = () => {
  //   const [product, setProduct] = useState({});
  //   const { id } = useParams();
  //   const getProduct = async () => {
  //     const { data } = await axios.get(`http://localhost:3000/products/${id}`);
  //     console.log(data)
  //     setProduct(data);
  //   };

  // dt5 copy and paste from daisy ui and modified