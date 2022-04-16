import React from 'react';
import { useState } from 'react';
const Navbar = () => {
    const [navtoggler, setnavtoggler] = useState(false);
    const slideNav=()=>{
          setnavtoggler(!navtoggler);
    }
    return (
        <div className='px-4 py-1'>
            <div className="navbar bg-base-100 shadow  rounded-lg">
            <div className="flex-none block lg:hidden">
                <button className="btn btn-square btn-ghost" onClick={()=>slideNav()}>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                 </button>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Motivater</a>
            </div>
            <div className={`p-0 absolute z-20 duration-200  top-0 ${navtoggler?'left-0':'-left-[500px]'}  bg-gray-500 w-2/3 h-full  lg:h-auto lg:w-auto lg:bg-transparent lg:static navbar`}>
            
                    <button className=' absolute  rotate-45 z-50 top-0 right-0 text-5xl  text-white cursor-pointer block lg:hidden' onClick={()=>slideNav()}>+</button>
               
            <ul className="menu menu-vertical top-0  left-0 absolute text-white w-full lg:text-black lg:static lg:menu-horizontal py-20 lg:py-0 ">
                 
                 <li className=' w-full text-left lg:w-auto'><a>Home</a></li>
                 <li className=' w-full text-left lg:w-auto'><a>Services</a></li>
                 <li className=' w-full text-left lg:w-auto'><a>Blogs</a></li>
                 <li className=' w-full text-left lg:w-auto'><a>About me</a></li>
            </ul>
            </div>
           
            <div className="flex-none">
                
                <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                    </div>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;