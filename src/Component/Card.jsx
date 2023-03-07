import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEdit, MdShoppingCart, MdOutlineRemoveCircleOutline, } from "react-icons/md";
// df4==deleteProduct
// ac4-----addToCart
// rc4-----removeFromCart
const Card = ({ product, deleteProduct, addToCart, removeFromCart }) => {
  // cm1
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const navigate = useNavigate();
  const goDetails = (e) => {
    e.stopPropagation();
    navigate(`/products/details/${product?.id}`);
  };
  return (
    <div onClick={goDetails} className="card w-96 bg-white shadow-xl">
      <div className="card-body">
        <img src={product.image} className="h-20 mx-auto" alt="" />
        <h2 className="card-title truncate">{product.title}</h2>
        <p className="truncate">{product?.description}</p>
        <p className="text-xl">${product?.price}</p>
        <div className="card-actions justify-end">
          {/* df5== */}

          {cartItems?.find((item) => item.id === product.id) ? (
            <button
              className="btn btn-sm btn-accent"
              onClick={(e) => {
                e.stopPropagation();
                removeFromCart(product.id);
              }}
            >
              <MdOutlineRemoveCircleOutline />
            </button>
          ) : (
            <button
              className="btn btn-sm btn-secondary"
              onClick={(e) => {
                e.stopPropagation();
                addToCart({ ...product, qty: 1 });
              }}
            >
              <MdShoppingCart />
            </button>
          )} 

          <button onClick={(e) => {
            e.stopPropagation();
            deleteProduct(product.id);
          }} className="btn btn-primary  btn-sm text-white">Delete</button>

          <Link to={`/products/edit/${product.id}`} state={{ product }} >
            <button
              onClick={(e) => {
                e.stopPropagation();
                editProduct(product.id);
              }}
              className="btn btn-success btn-sm text-white">
              {/* <MdEdit /> */}
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>);
};

export default Card;




// df1===go to product.jsx
// copy from  sweetalert2 and modified
// //  const deleteProduct = async (id) => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!",
//   }).then(async (result) => {
//     if (result.isConfirmed) {
//       Swal.fire(await axios.delete(`http://localhost:3000/products/${id}`));
//     }
//   });
// };

// // df2==go to product.jsx, [products]);
// useEffect(() => {
//   fetchProducts();
// }, [products]);


{/*deletefunction=3====go to product.jsx
            // deleteProduct={deleteProduct}  */}
            // {products?.map(product => <Card key={product?.id} product={product}
            //   deleteProduct={deleteProduct} />)}




//       // df4==deleteProduct go to card.jsx
// const Card = ({product,deleteProduct}) => {


//  {/* df5==
// <button  onClick={(e) => {
//   e.stopPropagation();
//   deleteProduct(product.id);
// }} className="btn btn-primary">Delete</button>




