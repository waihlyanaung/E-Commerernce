import axios from "axios";
import Layout from '../Component/Layout'
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
  // api bind 1
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const apiCreateProduct = async (pddata) => {
    const { data } = await axios.post("http://localhost:3000/products", pddata);
    console.log(data);
    navigate("/products")
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const productData = { title, price, description, image, category };
    await apiCreateProduct(productData);
  };
  return (
    <Layout><div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create new product!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={onSubmitHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input type="text" placeholder="Eg-MgMg" className="input input-bordered" value={title}
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="text" placeholder="text" className="input input-bordered" value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input type="text" placeholder="description" className="input input-bordered" value={description}
                onChange={(e) => setDescription(e.target.value)} />


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input type="text" placeholder="category" className="input input-bordered" value={category}
                  onChange={(e) => setCategory(e.target.value)} />

              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="text" placeholder="image url" className="input input-bordered" value={image}
                  onChange={(e) => setImage(e.target.value)} />

              </div>
            </div>
            <div className="form-control mt-6">
              <div className="flex gap-5">
                <Link to="/products">
                  <button className="btn btn-error text-white">Cancel</button>
                  
                </Link>
                <button type="submit" className="btn btn-primary">
                    Create
                  </button>
              
              </div>
            </div>
          </form>
        </div>
      </div>
    </div></Layout>
  )
}

export default AddProduct
//1 create addproduct file and go to layout.jsx to route
{/* <NavLink to="/addproduct">
<button className="py-1 my-1 bg-base-300 w-full rounded">
    Add Product
</button>
</NavLink>  */}

//3 watch  at localhost
//4 modified input from

// 5 api bind 1$$$$$$$
// import React, { useState } from "react";
// const [title, setTitle] = useState("");
//  value={image}
// onChange={(e) => setImage(e.target.value)}


// 6change card body div to form
//7 onSubmit={onSubmitHandler} and create api
// ####
// const apiCreateProduct = async (pddata) => {
//   const { data } = await axios.post("http://localhost:3000/products", pddata);
//   console.log(data);
// };

// const onSubmitHandler = async (e) => {
//   e.preventDefault();
//   const productData = { title, price, description, image, category };
//   await apiCreateProduct(productData);
// };
// #####

// 8 create button and cancel button
// <div className="form-control mt-6">
              //   <div className="flex gap-5">
              //     <Link to="/products">
              //       <button className="btn btn-error text-white">Cancel</button>
              //     </Link>
              //     <button type="submit" className="btn btn-primary">
              //       Create
              //     </button>
              //   </div>
              // </div>

// 9 
// const navigate = useNavigate(); 
// navigate("/products")