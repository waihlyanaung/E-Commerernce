import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from "../features/authApi";


// import{useRegisterMutation} from" ../features/authApi";

const Register = () => {
    // 4reg
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const [register] = useRegisterMutation();
    const [error, setError] = useState({});
    // 9reg 
    const navigate = useNavigate();
    // 6reg
    const registerHandler = async (e) => {
        e.preventDefault();
        const user = { name, email, password, password_confirmation };
        const data = await register(user);
        console.log(data);
        // 10 reg
        if (data?.success) navigate('/login')
        // setError(data?.error ?. data?.errors);
        // console.log(data?.error ?. data?.errors);
    };
    return (
        <div><div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* 7reg--onSubmit={registerHandler} */}
                    <div onSubmit={registerHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            {/* 5reg---value={name}
                                onChange={(e) => setName(e.target.value)} */}
                            <input type="text" placeholder="Enter your name" className="input input-bordered" value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <small>{error?.email?.map((item) => item)}</small>
                            <input type="email" placeholder="email" className="input input-bordered" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" value={password}
                                onChange={(e) => setPassword(e.target.value)} />

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password Confirmation</span>
                                </label>
                                <small>{error?.password?.map((item) => item)}</small>
                                <input type="password confirmation" placeholder="Enter above password" className="input input-bordered" value={password_confirmation}
                                    onChange={(e) => setPassword_confirmation(e.target.value)} />
                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Already have account?</a>
                                <Link to="/login">
                                    {/* <a href="#" className="label-text-alt link link-hover">Login</a> */}
                                </Link>            </label>
                        </div>
                        <div type="submit" className="form-control mt-6">
                            <button className="btn btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Register
// 1create register file and go to app.jsx
//  2  <Route path="/register" element={<Register />} />

// 3write reg form

// 4reg
// const[name,setName]=useState("");


// 5reg
// value={name}
// onChange={(e) => setName(e.target.value)}

// 6reg
// const registerHandler = async (e) => {
//     e.preventDefault();
// }

// 7reg div to Form{/* 7reg--onSubmit={registerHandler} */}
{/* <Form onSubmit={registerHandler} className="card-body"> */ }

//8reg create store.js and authApi.js
// npm install --save react-redux @reduxjs/toolkit

// 9reg
// const navigate=useNavigate();

  // 10 reg
//   if (data?.success) navigate('/login')










