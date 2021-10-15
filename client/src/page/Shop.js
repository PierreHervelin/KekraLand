import React from 'react';
import { motion } from "framer-motion";

const Shop = () => {
    
    return (
        <main>
            <motion.div
                className='testdiv'
                animate={{
                    transform:'translate(500px,500px)'
                }}
                transition={{
                    duration:4
                }}
            >
                <h1 className='test'>test</h1>
            </motion.div>
        </main>
    );
};

export default Shop;