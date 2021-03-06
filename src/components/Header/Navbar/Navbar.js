import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from "../../../firebase/firebase.init";
import { signOut } from "firebase/auth";
import Customlink from "../../Customlink";
const Navbar = ({toggleviewmode}) => {
  const [navtoggler, setnavtoggler] = useState(false);
  const slideNav = () => {
    setnavtoggler(!navtoggler);
  };
  const clickhandel=()=>{
        toggleviewmode();
  }
//  User check
  const [user,loading]=useAuthState(auth);
  return (
    <div className="px-4 py-1  ">
      <div className="navbar bg-base-100 dark:bg-slate-600 shadow dark:text-white  rounded-lg">
        <div className="flex-none block lg:hidden">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => slideNav()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Instructor</a>
        </div>
        <div>
          <label className="swap swap-rotate" >
            <input type="checkbox" onClick={()=>{clickhandel()}} />

            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        <div
          className={`p-0 absolute z-20 duration-200  top-0 ${
            navtoggler ? "left-0" : "-left-[500px]"
          }  bg-gray-500 w-2/3 h-full  lg:h-auto lg:w-auto lg:bg-transparent lg:static navbar`}
        >
          <button
            className=" absolute  rotate-45 z-50 top-0 right-0 text-5xl  text-white cursor-pointer block lg:hidden"
            onClick={() => slideNav()}
          >
            +
          </button>

          <ul className="menu menu-vertical top-0   left-0 absolute text-white w-full lg:text-black lg:static lg:menu-horizontal py-20 lg:py-0 dark:text-white ">
            <li className=" w-full text-left lg:w-auto">
              <Customlink to="/">Home</Customlink>
            </li>
            <li className=" w-full text-left lg:w-auto">
              <Customlink to="/services">Services</Customlink>
            </li>
            <li className=" w-full text-left  lg:w-auto">
              <Customlink to="/blogs">Blogs</Customlink>
            </li>
            <li className=" w-full text-left lg:w-auto">
              <Customlink to="/about">About me</Customlink>
            </li>
            <li className="w-full text-left lg:w-auto">
            {
         !user &&
              <Customlink to="/login">Login</Customlink>
            
       }
            </li>
          </ul>
         
        </div>
        {user && <div className="flex-none">
          <div className="dropdown dropdown-end mx-5 lg:mx-0">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-slate-600"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={()=>signOut(auth)}>Logout</a>
              </li>
            </ul>
          </div>
        </div>}

 
      </div>
    </div>
  );
};

export default Navbar;
