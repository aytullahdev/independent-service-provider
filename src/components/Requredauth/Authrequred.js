import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

const Authrequred = ({children}) => {
    const location = useLocation();
    const [user,loading]=useAuthState(auth)
  
        if(!loading){
            if(user){
                return children;
            }else{
                return <Navigate  to="/login" state={{from:location}} replace />

            }
        }else{
            return <progress class="progress w-56"></progress>
        }
  
};

export default Authrequred;