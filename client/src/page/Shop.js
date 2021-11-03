import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import Video from '../asset/video/shophomevideo.mp4'
import ShopNavbar from '../components/ShopNavbar';

const Shop = () => {
    
    return (
        <main className='Shop'>
            <ShopNavbar/>
            <div className='video'>
                <video muted autoPlay loop>
                    <source src={Video} type='video/mp4'/>
                </video>
                <div className='content'>
                    <h2>NOUVEL ALBUM DISPONIBLE</h2>
                    <button>Acheter Maintenant</button>
                </div>
            </div>
        </main>
    );
};

export default Shop;