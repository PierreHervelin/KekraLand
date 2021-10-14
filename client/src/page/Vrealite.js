import React from 'react';
import '../styles/index.css';
import cover from '../asset/img/cover1.jpeg'
import { motion } from 'framer-motion';
import Tracklist from '../components/Tracklist';


const Vrealite = () => {

   /* const variants = {
        visible: {opacity: 1,
        transition:{
            when:"beforeChildren",
            staggerChildren: 0.3,
        }},
        hidden: {opacity: 0,
         transition:{
            when:"afterChildren",
        }}
    }
    */

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
                />
            </div>
            <div className="batiment"></div>
            <div className="tracklist-container">
                <div className='col'>
                    <motion.ul
                        className="tracklist"
                        animate={{
                            opacity:1,
                            marginTop:0
                        }}
                        transition={{
                            delay:3,
                            duration:3
                        }}
                    >
                        <Tracklist album='vrealite'/>
                    </motion.ul>
                </div>
            </div>
        </div>
    );
};

export default Vrealite;