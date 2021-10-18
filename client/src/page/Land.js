import React from 'react';
import bulle from '../asset/img/land/bulle.png'
import { motion } from 'framer-motion';


const Land = () => {
    const mouv1 = {
        transition:[
            'translate(10px,-10px)',
            'translate(-10px,-20px)',
            'translate(20px,-500px)'
        ]

    }
    const mouv2 = {
        transition:[
            'translate(10px,-10px)',
            'translate(-10px,-20px)',
            'translate(20px,-500px)'
        ]

    }
    const mouv3 = {
        transition:[
            'translate(10px,-10px)',
            'translate(-10px,-20px)',
            'translate(20px,-500px)'
        ]

    }
    return (
        <div className = "land-container">
            <div className ="bulle-container">
                <motion.div
                className = "bulle"
                    animate={{
                        transform:[
                            'translate(10px,-10px)',
                            'translate(-10px,-20px)',
                            'translate(20px,-500px)'
                        ],
                        
                        
                    }}
                    transition={{
                        delay:1,
                        duration:2.5,
                        times:[
                            ''
                        ]
                    }}
                    

                >           
                <div className="grosse-bulle"></div>
                <div className="moyenne-bulle"></div> 
                <div className="grosse-bulle"></div>
                <div className="petite-bulle"></div>
                <div className="grosse-bulle"></div>
                <div className="petite-bulle"></div>
                <div className="moyenne-bulle"></div> 
                <div className="moyenne-bulle"></div>  
                </motion.div>

            </div>
        </div>
    );
};

export default Land;