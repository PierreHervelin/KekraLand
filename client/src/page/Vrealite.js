import React from 'react';
import '../styles/index.css';
import cover from '../asset/img/cover1.jpeg'
import { motion } from 'framer-motion';

const Vrealite = () => {



    return (
        <div className="vrealite">
           <div className="cover"> 

                <motion.img

                    className = "coverVrealite"
                    src={cover} alt=''
                    animate={{
                        transform:'translate(-120%,-20%)',
                        width:25+'%',
                    }}
                    transition={{
                        duration:2.5
                    }}

                    
                >

                </motion.img>
           
           </div>
           <div className=" batiment"> </div>

           <motion.div>
                


           </motion.div>
        </div>
    );
};

export default Vrealite;