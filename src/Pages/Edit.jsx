import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../Component/Layout";
//ef4 edit data call and console.log
const Edit = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    const getProduct = async () => {
        const { data } = await axios.get(`http://localhost:3000/products/${id}`);
        console.log(data);
        setTitle(data?.title);
        setPrice(data?.price);
        setDescription(data?.description);
        setImage(data?.image);
        setCategory(data?.category);
    }
    

        useEffect(() => {
            getProduct();
          }, []);
//ef5 for onSubmitHandler and value
          const onSubmitHandler = async (e) => {
            e.preventDefault();
            const pdata = { title, description, price, image, category };
            await axios.patch(`http://localhost:3000/products/${id}`, pdata);
            navigate("/products")
          };

    // ef3
    return (
        <Layout><div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update new product!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form
                     onSubmit={onSubmitHandler}
                     className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered"
                             value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                 />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="text" className="input input-bordered"
                             value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="description" className="input input-bordered" 
                            value={description}
                                onChange={(e) => setDescription(e.target.value)} 
                                />


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" placeholder="category" className="input input-bordered" 
                                value={category}
                                    onChange={(e) => setCategory(e.target.value)} 
                                    />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="image url" className="input input-bordered" 
                                value={image}
                                    onChange={(e) => setImage(e.target.value)} 
                                />

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

export default Edit



// create edit file and route at app.jsx
// import Edit from "./Pages/Edit";
{/* <Route
          path="/products/edit/:id"
          element={
            <Guard>
              <Edit />
            </Guard>
          }
        /> */}

// ef2 write at card.jsx
// import { Link, useNavigate } from "react-router-dom";
// import { MdEdit,} from "react-icons/md";
{/*   <Link to={`/products/edit/${product.id}`} state={{product}} >
<button className="btn btn-success btn-sm text-white">
  <MdEdit />
</button>
</Link> */}

// ef3 copy and paste form

//ef4 edit data call and console.log
// const Edit = () => {
    // const [title, setTitle] = useState("");
//     const { id } = useParams();
// const navigate = useNavigate();
//     const getProduct = async () => {
//         const { data } = await axios.get(`http://localhost:3000/products/${id}`);
//         console.log(data);
// setTitle(data?.title);}

//         useEffect(() => {
//             getProduct();
//           }, []);


//ef5 for onSubmitHandler and value
// const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     const pdata = { title, description, price, image, category };
//     await axios.patch(`http://localhost:3000/products/${id}`, pdata);
//     navigate("/products")
//   };
// ef5 of a
{/* <form
                     onSubmit={onSubmitHandler} */}
                    //  ef5 of b
                //      value={image}
                //      onChange={(e) => setImage(e.target.value)} 
                //  />

