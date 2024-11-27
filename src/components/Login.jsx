import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContex } from "./AuthProvider/AuthProvider";

const Login = () => {
  const { handleLogin, user, setUser } =useContext(authContex);
const location=useLocation()
console.log(location)

const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    handleLogin(email,password)
    .then(res=>{
      navigate(location.state)
    })
  };
  return (
    <div className="card bg-base-100 max-w-xl mx-auto p-14  shrink-0 shadow-2xl">
      <h1 className="text-3xl text-center font-bold">Login now!</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div>
        <p>
          New to the website? please{" "}
          <Link to={"/register"} className="text-red-500">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
