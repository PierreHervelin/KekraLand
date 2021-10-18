import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Vreel3 = () => {
    let leftNuage=0,
        leftPolice=-100;
    let randPolice=0;
    let randLight=0;
    useEffect(() => {
        const nuages=document.querySelector('.nuages');
        const police=document.querySelector('.police');
        const lights=document.querySelector('.lights');
        setInterval(() => {
            if(leftNuage<-99){
                leftNuage=0;
            }
            nuages.style.left=leftNuage+'%';
            leftNuage-=0.05;
        }, 50);
        setInterval(() => {
            if(randPolice==1){
                if(leftPolice>100){
                    leftPolice=-100;
                    randPolice=0;
                }
                police.style.left=leftPolice+'%';
                leftPolice++;
            }else{
                randPolice=Math.floor(Math.random()*100);
            }
        }, 50);
        setInterval(() => {
            randLight=Math.floor(Math.random()*100);
            if(randLight==1){
                lights.style.opacity=1;
            }else if(randLight==2){
                lights.style.opacity=0;
            }
        }, 200);
    }, [])

    return (
        <main id='vreel3'>
            <div className='background'></div>
            <div className='panneau-back'></div>
            <motion.div
                className='panneau-content'
                id='cover'
                animate={{
                    opacity:[1,1,0,0,1]
                }}
                transition={{
                    duration:20,
                    times:[0,0.4,0.5,0.9,1],
                    repeat:Infinity
                }}
            ></motion.div>
            <motion.div
                className='panneau-content'
                id='tracklist'
                animate={{
                    opacity:[0,0,1,1,0]
                }}
                transition={{
                    times:[0,0.4,0.5,0.9,1],
                    duration:20,
                    repeat:Infinity
                }}
            ></motion.div>
            <div className='panneau'></div>
            <div className='panneau-light'></div>
            <motion.div 
                className='panneau-light' 
                id='panneau-light2'
                animate={{
                    opacity:[0,1,1,0,1,0,1,0,1,0]
                }}
                transition={{
                    duration:12,
                    times:[0,0.01,0.93,0.94,0.95,0.96,0.97,0.98,0.99,1],
                    repeat:Infinity
                }}
            ></motion.div>
            <div className='plateforme'></div>
            <div className='nuages'>
                <div className='nuage'></div>
                <div className='nuage'></div>
            </div>
            <motion.div 
                className='police'
                animate={{
                    opacity:[0,1,0]
                }}
                transition={{
                    duration:1,
                    repeat:Infinity
                }}
            ></motion.div>
            <div className='lights2'></div>
            <div className='lights'></div>
        </main>
    );
};

export default Vreel3;