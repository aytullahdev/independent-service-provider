import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Passwordreset = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
      auth
    );
    const notify = () => toast(error?.message || "Mail sended to your email");
    
    return (
        <div className='h-[63vh] py-10'>
            <div>
                <input type="text" className='input' onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" />
            </div>
            <div>
                {/* <p className='text-red-400'>{error?.message}</p> */}
            </div>
            <div>
                <button className='btn btn-warning my-4'  onClick={async () => {
          await sendPasswordResetEmail(email)
                .then(()=>{
                    notify();
                })
               
        }}>SEND EMAIL</button>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Passwordreset;