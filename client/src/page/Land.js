import React from 'react';
import bulle from '../asset/img/land/bulle.png'
import { motion } from 'framer-motion';


const Land = () => {
    return (
        <div className = "land-container">
            <div className ="bulle-container">
                <motion.div
                className = "bulle"
                    animate={{
                        transform:'translate(0px,0px)'
                    }}
                    transition={{
                        delay:1,
                        duration:2.5
                    }}

                >  
               
                
                
                </motion.div>

            </div>
        </div>
    );
};

export default Land;