import React from 'react';
import { motion } from "framer-motion";
import ContentShop from '../components/ContentShop';
import Navbar from '../components/Navbar';

const Shop = () => {
    
    return (
        <main className='Shop'>
            <Navbar/>
            <ContentShop/>
        </main>
    );
};

export default Shop;