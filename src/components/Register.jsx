import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContex } from "./AuthProvider/AuthProvider";

const Register = () => {
  const { handleLogin,updateUser, handleRegister, handleGoogleLogin, user, setUser } =
    useContext(authContex);
    const navigate=useNavigate()
    const [error,setError]=useState('')

  const handleSubmit = (e) => {
    setError('')
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conpassword = e.target.conpassword.value;
    const name = e.target.name.value;
    const photourl = e.target.photourl.value;
    // console.log(email, password, name, photourl, conpassword);
    
    if(password.length<6)
    {
      setError('password must be at least 6 characters')
      return;
    }

    if(password!==conpassword)
    {
        setError('password does not match   ' )
        return;
    }

    if(!/[a-z]/.test(password)){
      setError('password should be at least one small characte')
      return;
    }
    if(!/[A-Z]/.test(password))
    {
      setError('password should be at least one uppercase ')
      return;
    }
    
    
    handleRegister(email,password)
    .then(result=>{

      updateUser(name,photourl)
      navigate('/')

    })
    .catch(error=>{
      setError('ERROR',error.message);
    })
  };

  return (
    <div className="card bg-base-100 max-w-xl mx-auto p-14  shrink-0 shadow-2xl">
      <h1 className="text-3xl text-center font-bold">Register now!</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            name="photourl"
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
            required
          />
        </div>
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
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            name="conpassword"
            type="password"
            placeholder="Confirm password"
            className="input input-bordered"
            required
          />
        </div>
        {
          error&&<p className="text-red-600">{error}</p>
        }
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <div>
        <p>
          Already have an account? please{" "}
          <Link className="text-red-500" to={"/login"}>
            Login
          </Link>{" "}
        </p>
      </div>
      <div>
        <button onClick={handleGoogleLogin} className="btn btn-neutral w-full mt-6">
          {" "}
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
