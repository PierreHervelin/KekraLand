import React from 'react';
import CompPanier, { UserPanier } from './CompPanier';
import ContentShop from './ContentShop';
import Navbar from './Navbar';

const ShopNavbar = () => {
    return (
        <div className='shopNavbar'>
            <Navbar/>
            <ContentShop/>
        </div>
    );
};

export default ShopNavbar;