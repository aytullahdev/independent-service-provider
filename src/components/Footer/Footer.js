import React from 'react';
import './footer.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react';
const Footer = () => {
    const notify = () => toast("Thank you for subscribing",{
        onClose:()=>{
            console.log("Closed");
        }
    });
    const [email, setemail] = useState("")
    return (
        <>
        <div >
            <h1 className='text-gray-500 text-3xl uppercase text-left p-5'>Subscribe to our Newsletter</h1>
                <div className='flex items-center justify-center  space-x-3'>
                    <div>
                        <input type="text" className='input' placeholder='Enter your email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>

                    </div>
                    <div>
                        <button className='btn btn-success' disabled={ (email.length<=5)} onClick={()=>{notify()}}>SUBSCRIBE</button>
                    </div>
                </div>
        </div>
        <div className='footer mt-3 py-5 px-5 text-center text-xl text-white bottom-0'>
           &copy; Copyright Instructor { new Date().getFullYear()}
        </div>
        <ToastContainer />
        </>
    );
};

export default Footer;