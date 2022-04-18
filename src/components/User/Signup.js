import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import { useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [sendemailvif,Setsendemailvif]=useState(false);
  const [password, setPassword] = useState('');
  const [cpassword,setCpassword] = useState('');
  const [cerror,setCerror] = useState('');
    const [user]=useAuthState(auth);
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:sendemailvif});
      const handleSignup=()=>{
            if(password!=cpassword){ setCerror("password don't matched ");return;}
            if(password.length<8) { setCerror("Password must be 8 char");return};
            createUserWithEmailAndPassword(email,password);
            setCerror('');
           
            
           
      }
      if(user) navigate('/',{replace:true})
  return (
    <>
   { !user && <> <div >
    <div className="hero h-[screen]  bg-base-200 dark:bg-slate-900">
      <div className="hero-content w-4/5 lg:w-2/4 mt-0 pt-0  ">
       
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
            <div className="flex justify-start py-2 space-x-2">
              <input type="checkbox" className="checkbox" onChange={(e)=>Setsendemailvif(e.target.checked)}/>
              <span>Send Email verification</span>
            </div>
            <div>
                <span className="text-red-500">{error?.message} {cerror}</span>
            </div>
            <div className="form-control mt-6"> 
              <button className="btn btn-primary" onClick={()=>{handleSignup()}} disabled={!sendemailvif}>SIGN UP</button>
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
