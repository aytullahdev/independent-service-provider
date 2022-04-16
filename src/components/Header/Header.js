import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';

const Header = ({toggleviewmode}) => {
    return (
        <div>
            <Navbar toggleviewmode={toggleviewmode}/>
            <Banner/>
        </div>
    );
};

export default Header;