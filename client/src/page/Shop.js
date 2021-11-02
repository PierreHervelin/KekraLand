import React from 'react';
import { motion } from "framer-motion";
import ContentShop from '../components/ContentShop';
import Navbar from '../components/Navbar';
import Panier from '../components/Panier';

const Shop = () => {
    
    return (
        <main className='Shop'>
            <Navbar/>
            <ContentShop/>
            <Panier/>
        </main>
    );
};

export default Shop;