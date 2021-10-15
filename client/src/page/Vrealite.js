import React from 'react';
import '../styles/index.css';
import cover from '../asset/img/cover1.jpeg'
import { motion } from 'framer-motion';
import Tracklist from '../components/Tracklist';


const Vrealite = () => {
    return (
        <div className="vrealite">
            <div className="cover"> 
                <motion.img
                    className = "coverVrealite"
                    src={cover} alt=''
                    animate={{
                        //top:5,
                        left:'20%',
                        width:25+'%',
                    }}
                    transition={{
                        delay:1,
                        duration:2.5
                    }}
                />
                <div className="tracklist-container">
                <div className='col'>
                    <motion.ul
                        className="tracklist"
                        animate={{
                            opacity:1,
                            marginTop:0
                        }}
                        transition={{
                            delay:4,
                            duration:3
                        }}
                    >
                        <Tracklist album='vrealite'/>
                    </motion.ul>
                </div>
            </div>
            </div>
            <div className="batiment"></div>
            <motion.div
                className='fullblack'
                animate={{
                    opacity:0
                }}
                transition={{
                    duration:1
                }}
            >
                
            </motion.div>
        </div>
    );
};

export default Vrealite;