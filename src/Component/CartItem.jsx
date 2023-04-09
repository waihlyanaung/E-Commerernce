import React from 'react'

// tp7---increment write cartitem.jsx
// tpd3---decrement write cartitem.jsx
const CartItem = ({ item, increment, decrement }) => {
  return (
    // <div className="card w-96 bg-base-100 shadow-xl">

    // {/* <div className="card-body"> */}
    <div className='flex justify-between w-full mb-5'>
      <div className="flex gap-5">
        <img className='w-40 h-40 object-cover' src={item.image} alt="" />

        <div>
          <p className="mb-3 text-sm text-cyan-500">{item?.title.substring(0,
            25)}....</p>
          {/* tp8--- item?.qty*/}
          <p>${item?.price * item?.qty}</p>
          {/* <p className='cursor-pointer text-red-500'>remove</p> */}
        </div>
      </div>
      
      <div className="btn-group">
        {/* tpd4---onClick={()=>decrement(item.id)} */}
        <button onClick={() => decrement(item.id)} className="btn btn-error">-</button>
        <button className="btn">{item.qty}</button>
        {/* tp9---onClick={()=>increment(item.id)} */}
        <button onClick={() => increment(item.id)} className="btn btn-primary">+</button>
      </div>



    </div>

  )


}

export default CartItem

