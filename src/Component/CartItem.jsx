import React from 'react'

// tp7---increment write cartitem.jsx
// tpd3---decrement write cartitem.jsx
const CartItem = ({item ,increment ,decrement}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex gap-3">
          <img src={item.image} className="h-20" alt="" />
          <div className="">
            <h1 className="mb-3 text-sm text-cyan-500">{item?.title}</h1>
            {/* tp8--- item?.qty*/}
            <p>${item?.price* item?.qty}</p>
            <div className="btn-group">
              {/* tpd4---onClick={()=>decrement(item.id)} */}
              <button onClick={()=>decrement(item.id)} className="btn btn-error">-</button>
              <button className="btn">{item.qty}</button>
              {/* tp9---onClick={()=>increment(item.id)} */}
              <button onClick={()=>increment(item.id)} className="btn btn-primary">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CartItem