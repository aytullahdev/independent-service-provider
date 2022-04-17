import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import { useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword,setCpassword] = useState('');
    const [user]=useAuthState(auth);
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const handleSignup=()=>{
            if(password!=cpassword) return;
            if(password.length<8) return;
            createUserWithEmailAndPassword(email,password);
            
           
            
           
      }
      if(user) navigate('/',{replace:true})
  return (
    <>
   { !user && <> <div >
    <div className="hero h-[80vh] bg-base-200 dark:bg-slate-900">
      <div className="hero-content w-3/4 lg:w-2/4 mt-0 pt-0  ">
       
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                onChange={(e) => setPassword(e.target.value)}
              />
             
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered"
                onChange={(e) => setCpassword(e.target.value)}
              />
             
            </div>
            <div>
                <span className="text-red-500">{error?.message}</span>
            </div>
            <div className="form-control mt-6"> 
              <button className="btn btn-primary" onClick={()=>{handleSignup()}}>SIGN UP</button>
            </div>
            <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Alrady have an account?
                </Link>
              </label>
          </div>
        </div>
      </div>
    </div>
  </div></>}
  {loading && <progress className="progress w-56"></progress>}
  

  </>
  );
};

export default Signup;
