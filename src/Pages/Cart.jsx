
import Layout from '../Component/Layout'
import CartItem from "../Component/CartItem";
import React, { useState } from "react";
const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  // tp2
  const [cart, setCart] = useState(cartItems);
  const total = cart?.reduce((a, c) => a + c.price * c.qty, 0);
  // tp5
  const increment = (id) => {
    setCart(
      cart?.map((item) => {
        if (item.id === id) {
          item.qty += 1;
        }
        return item;
      }
      ))
  }

  // tpd1
  const decrement = (id) => {
    setCart(
      cart?.map((item) => {
        if (item.id === id && item.qty > 1) {
          item.qty -= 1;
        }
        return item;
      }
      ))
  }

  return (



<Layout>

    <div className='w-[1024px] mx-auto flex items-start flex-col mt-10'>
     
      {cart?.map((item) => (
        // tp6 -----increment={increment
        // tpd2-----decrement={decrement}
        <CartItem key={item?.id} item={item} increment={increment}
          decrement={decrement} />
      ))}

      <hr className="border-1 
           border-black w-full" />

      <div className='flex justify-between w-full'>

        <h2>Total</h2>

        <p>${total.toFixed(2)}</p>

      </div>
    </div>

</Layout>
  )

}

export default Cart

// // //ct1 create  layout at layout.jsx
// // {/* <NavLink to={"/cart"}>
// // <button className="py-1 my-1 bg-base-300 w-full rounded">
// //   Cart - 10
// // </button>
// // </NavLink> */}

// // // ct2 route and import at app.jsx
// import Cart from "./Pages/Cart";
{/* <Route
          path="/cart"
          element={
            <Guard>
              <Cart />
            </Guard>
          }
        /> */}

// ct3 write at Cart.jsx
// import Layout from '../Component/Layout';
// import CartItem from "../Component/CartItem";

// const Cart = () => {
//     const cartItems = JSON.parse(localStorage.getItem("cartItems"));

//     return (
//             <Layout>
//                 <div className="">
//                   {cart?.map((item) => (
//                     <CartItem key={item?.id} item={item} />
//                   ))}
//                 </div>
//             </Layout>
//           )

// }

// export default Cart


// ct4 file create cartItem and copy/paste card form from daisy ui 

// import React from 'react'

// const CartItem = ({item}) => {
//     return (
//       <div className="card w-96 bg-base-100 shadow-xl">
//         <div className="card-body">
//           <div className="flex gap-3">
//             <img src={item.image} className="h-20" alt="" />
//             <div className="">
//               <h1 className="mb-3 text-sm text-cyan-500">{item?.title}</h1>
//               <p>${item?.price}</p>
//               <div className="btn-group">
//                 <button className="btn btn-error">-</button>
//                 <button className="btn">{item.qty}</button>
//                 <button className="btn btn-primary">+</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     )
//   }

//   export default CartItem







// for total price increment and decrement
// tp1
// <div className="">
//    <h1 className="text-2xl">Total Price</h1>
//  </div>

// tp2
//  const [cart, setCart] = useState(cartItems);
// const total = cart?.reduce((a, c) => a + c.price * c.qty, 0);

//  {/* tp3---${total} */}
//  <h1 className="text-2xl">Total Price-${total}</h1>


// tp4---write card item
// <div className="btn-group">
// //                 <button className="btn btn-error">-</button>
// //                 <button className="btn">{item.qty}</button>
// //                 <button className="btn btn-primary">+</button>
// //               </div>


// tp5 write cart.jsx
//     const increment=(id)=>{
//       setCart(
//         cart?.map((item)=>{
// if (item.id===id){
//   item.qty+=1;}
// return item;
//         }
//       ))
//     }

// tp6 -----increment write cart.jsx
{/* <CartItem key={item?.id} item={item} increment={increment} /> */ }

// tp7---increment write cartitem.jsx
// const CartItem = ({item ,increment}) => {


{/* tp9---onClick={()=>increment(item.id)} */ }
//  <button onClick={()=>increment(item.id)} className="btn btn-primary">+</button>

// toal price for decrement
// tpd1
// tpd1 write cart.jsx
//  const decrement=(id)=>{
//   setCart(
//     cart?.map((item)=>{
// if (item.id===id && item.qty>1){
// item.qty-=1;}
// return item;
//     }
//   ))
// }

// // tpd2-----decrement={decrement} write cart.jsx
// <CartItem key={item?.id} item={item} increment={increment}
// decrement={decrement}/>

// tpd3---decrement write cartitem.jsx
// const CartItem = ({item ,increment ,decrement}) => {

{/* tpd4---onClick={()=>decrement(item.id)} */ }
//  <button onClick={()=>decrement(item.id)} className="btn btn-error">-</button>

// Cart quantity show at menubar1 write at layout
// const cartItems = JSON.parse(localStorage.getItem("cartItems"));

{/*Cart quantity show at menubar1---- {cartItems?.length} */ }
//  <NavLink to={"/cart"}>
//  <button className="py-1 my-1 bg-base-300 w-full rounded">
//      Cart - {cartItems?.length}
//  </button>
// </NavLink>






