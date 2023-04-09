// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLogin1Mutation } from "../features/authApi";

// const login1 = () => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     // 7log
//     const[login1]=useLogin1Mutation();
//     // 9log
//     const navigate = useNavigate();
//     const login1Handler = async (e) => {
//         e.preventDefault();
//         // 8log
//         const { data } = await login1({ email, password });
//         console.log(data);
//         // 10log
//         if (data?.success) navigate('/dashboard')
//     }
//     return (
//         <div className="hero min-h-screen bg-base-200">
//             <div onSubmit={login1Handler} className="hero-content flex-col lg:flex-row-reverse">
//                 <div className="text-center lg:text-left">
//                     <h1 className="text-5xl font-bold">Login now!</h1>
//                     <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                 </div>
//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                     <div className="card-body">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="text" placeholder="email" className="input input-bordered" value={email}
//                                 onChange={(e) => setEmail(e.target.value)} />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="text" placeholder="password" className="input input-bordered" value={password}
//                                 onChange={(e) => setPassword(e.target.value)} />
//                             <label className="label">
//                                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                             </label>
//                         </div>
//                         <div className="form-control mt-6">
//                             <button className="btn btn-primary">Login</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default login1

// create login1 file
// route at app.jsx

// create form copy daisy ui

// 1log
// const [email, setEmail] = useState("");

// 2log
// value={email}
// onChange={(e) => setEmail(e.target.value)} 

// 3log
//  const login1Handler = async (e) => {
//     e.preventDefault();
// }

// 4log
{/* <Form onSubmit={login1Handler} */ }

// 5log go to authapi.js
// 6log ----useLogin1Mutation

// 7log at login1.jsx
// const [login1]=useLogin1Mutation

 // 8log
//  const {data}=await login1({email,password});
//  console.log(data);

// 9log
// const navigate =useNavigate();

// 10log
// if(data?.success)navigate('/dashboard')

// 11log go to authSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// export const authSlice=createSlice({
//     name:"auth",
//     initialState:{user:null,token:null},
//     reducers:{
//     addUser:(state,{payload})=>{
//      state.user=payload.user;
// state.token=payload.token;
// },
//     }
// });
// export const {addUser}=authSlice.actions;
// export default authSlice.reducer;

// 12log go to navbar
//   const user =useSelector(state.auth.user)