
import Layout from '../Component/Layout'
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Component/Card"
import Swal from "sweetalert2";
import { useStateContext } from '../Context/StateContext'
const Products = () => {
  // search4
  // const{search}=useStateContext();
  const [products, setProducts,] = useState([]);
// cm3
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  // ac2
  // cm4 (cartItems ? [...cartItems] : []);
  const [cart, setCart] =  useState(cartItems ? [...cartItems] : []);
  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart)
    localStorage.setItem("cartItems", JSON.stringify([...cart, product]));
  };

  // rc2
  const removeFromCart = (id) => {
    setCart(cart?.filter((item) => item.id !== id));
     console.log(cart)
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cart?.filter((item) => item.id !== id))
    );
  };

  // df1===go to product.jsx
  const deleteProduct = async (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
      // .then((result) => {
    }).then(async(result) => {
      if (result.isConfirmed) {
        Swal.fire(await axios.delete(`http://localhost:3000/products/${id}`)
         
        )
      }
    })
    // const { data } = await axios.delete(`http://localhost:3000/products/${id}`);
    // console.log(data);
  }

  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    console.log(data);
    setProducts(data);
  };
  // df2== }, [products]);
  useEffect(() => {
    fetchProducts();
   

  }, [products,]);
  return (
    <Layout>
     <div className="flex flex-wrap gap-5 justify-center items-center mb-10">
    
    {products?.map((product) => 
    <Card key={product?.id} product={product} 
            deleteProduct={deleteProduct}
            // ac3 ----addToCart={addToCart}
            // rc3---- removeFromCart={removeFromCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart} />
            
    )}
      </div>
    </Layout>
  );
};

export default Products;



//for add to card  
// ac1 write create bottom contain onClick function at Card.jsx
{/* <button
className="btn btn-sm btn-secondary"
onClick={(e) => {
  e.stopPropagation();
  addToCart({...product, qty: 1});
}} */}

// ac2 write at product.jsx
// const [cart, setCart] =  useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//     localStorage.setItem("cartItems", JSON.stringify([...cart, product]));
//   };


 // ac3 ----addToCart={addToCart}
//  addToCart={addToCart} />)}

// ac4 write at Card.jsx
// ac4-----addToCart
// const Card = ({ product, deleteProduct,addToCart }) => { 



// rc1 create button contain function at Card.jsx
{/* <button
className="btn btn-sm btn-accent"
onClick={(e) => {
  e.stopPropagation();
  removeFromCart(product.id);
}}
>
<MdOutlineRemoveCircleOutline />
</button> */}

 // rc2 write at product.jsx
//  const removeFromCart = (id) => {
//   setCart(cart?.filter((item) => item.id !== id));
//   localStorage.setItem(
//     "cartItems",
//     JSON.stringify(cart?.filter((item) => item.id !== id))
//   );
// };


// rc3---- removeFromCart={removeFromCart}

//// rc4-----removeFromCart
// const Card = ({ product, deleteProduct,addToCart,removeFromCart }) => {
  
// Card Management 
// // cm1 write Card.jsx
  // const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  // cm2  write Card.jsx
  // {cartItems?.find((item) => item.id === product.id) ? (
//     <button
//     className="btn btn-sm btn-accent"
//     onClick={(e) => {
//       e.stopPropagation();
//       removeFromCart(product.id);
//     }}
//   >
//     <MdOutlineRemoveCircleOutline />
//   </button>
// ) : (
//   <button
//     className="btn btn-sm btn-secondary"
//     onClick={(e) => {
//       e.stopPropagation();
//       addToCart({...product, qty: 1});
//     }}
//   >
//     <MdShoppingCart />
//   </button>
// )}

// cm3 and cm4 write at product.jsx
// const cartItems = JSON.parse(localStorage.getItem("cartItems"));

 // cm4 (cartItems ? [...cartItems] : []);
//  const [cart, setCart] =  useState(cartItems ? [...cartItems] : []);