import React from 'react';
import './footer.css'
const Footer = () => {
    return (
        <div className='footer mt-3 py-5 px-5 text-center text-xl text-white bottom-0'>
           &copy; Copyright Instructor { new Date().getFullYear()}
        </div>
    );
};

export default Footer;