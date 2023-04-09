import axios from "axios";
import React, { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Login = () => {
  // 4

  const [username, setUserName] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  // loading1
  const [isLoading, setIsLoading] = useState(false);
  //  navigate
  const navigate = useNavigate();
  // 9
  const apiLogin = async () => {
    const { data } = await axios.post("https://dummyjson.com/auth/login", {
      username,
      password,
    });
    // loading3
    setIsLoading(false);
// loading5  for data put localstorage
    const userData = {
      name: `${data?.firstName} ${data?.lastName}`,
      email: data?.email,
      token: data?.token,
      image: data?.image
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(userData);
    //  navigate("/");
    navigate("/");
  };

  // 5
  const loginHandler = async (e) => {
    e.preventDefault();
    //  loading4
    setIsLoading(true);
    await apiLogin();
  };

  return (
    // 3
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* 7=[form onSubmit={loginHandler}] */}
          <form onSubmit={loginHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">username</span>
              </label>
              {/* 8=[value={username}
                  onChange={(e) => setUserName(e.target.value)}] */}
              <input type="text" placeholder="username" className="input input-bordered" value={username}
                onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" value={password}
                onChange={(e) => setPassword(e.target.value)} />
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              {/* 6=[type="submit" ]*/}
              {/* loading2=[ {isLoading ? (
                    <ImSpinner2 className="animate-spin" />
                  ) : (
                    "Login"
                  )}] */}
              {/* loading=[  className={`btn btn-primary ${isLoading && "btn-disabled"}`}] */}
              <button type="submit" className={`btn btn-primary ${isLoading && "btn-disabled"}`}> {isLoading ? (
                <AiOutlineLoading className="animate-spin" />
              ) : (
                "Login"
              )}</button>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Login