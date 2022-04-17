import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Checkout = () => {
  const id = useParams().id;
  const [user,loading]=useAuthState(auth);
  const [pid, setpid] = useState(id);
  const [email,setEmail] = useState(user.email);
  const [adress,setAdress] = useState('');
  const navigate = useNavigate();
  const [conagree,setConagree] = useState(false);
  const notify = () => toast("Thank you for buying this Session",{
      onClose:()=>{
          console.log("Closed");
      }
  });
  
  const checkoutHandle = ()=>{
      if(!conagree) return;
      if(email=='' || adress=='') return;
      notify()
      setTimeout(()=>{navigate('/services')},5000)
     
  }
  
  if(!id){
      return <Navigate to="/services"/>
  }
  return (
    <div className="w-3/4 lg:w-1/2 mx-auto ">
        <ToastContainer />
      <h1 className="text-xl text-black dark:text-white uppercase font-bold py-4">
        Checkout{" "}
      </h1>
      <div className="w-3/4 lg:w-2/4 mx-auto flex flex-col space-y-3">
        <div>
          <span className="font-bold text-orange-400 text-left">
            SELECTED PROGRAMER : {pid}
          </span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            readOnly
            className="input w-full max-w-xs"
            
          />
        </div>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-white">Adress</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Adress ********"
              onChange={(e)=>{setAdress(e.target.value)}}
            ></textarea>
          </div>
        </div>
        <div className="flex space-x-3">
            <input type="checkbox" onChange={(e)=>{setConagree(e.target.checked)}} className="checkbox dark:checkbox-secondary checkbox-sm"/>
            <span className="text-black dark:text-white">Agree with terms and condition</span>
        </div>
        <div>
            <button className="btn btn-secondary uppercase" disabled={!conagree} onClick={()=>checkoutHandle()}>Check out</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
