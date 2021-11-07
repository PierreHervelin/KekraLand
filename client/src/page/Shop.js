import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Video from '../asset/video/shophomevideo.mp4'
import ShopNavbar from '../components/ShopNavbar';

const Shop = () => {
    const [prevScrollPos,setPrevScrollPos]=useState(window.scrollY)
    const controls=useAnimation()


    const handleScroll=()=>{
        if(window.scrollY&&window.scrollY<window.innerHeight){
            const currentScrollPos=window.scrollY

            let down=false
            if(currentScrollPos>prevScrollPos) down=true

            setPrevScrollPos(currentScrollPos)
            setTimeout(() => {
                if(currentScrollPos===window.scrollY){
                    const config={
                        top:(down)?window.innerHeight:0,
                        behavior:'smooth'
                    }
                    window.scrollTo(config)
                }
            }, 500);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    })

    return (
        <main className='Shop'>
            <ShopNavbar/>
            <div className='video'>
                <video muted autoPlay loop>
                    <source src={Video} type='video/mp4'/>
                </video>
                <div className='content'>
                    <h2>NOUVEL ALBUM DISPONIBLE</h2>
                    <button>ACHETER MAINTENANT</button>
                </div>
            </div>
            <div className='new-cloth'>
                <div
                    className='title'
                    onMouseMove={
                        (e)=>{
                            const div=e.target.parentNode
                            const h2=div.lastElementChild

                            const pos=h2.getBoundingClientRect()

                            h2.style.clipPath=`circle(10% at ${e.clientX-pos.left}px ${e.clientY-pos.top}px)`
                        }
                    } 
                    onClick={
                        (e)=>{
                            e.target.parentNode.parentNode.classList.add('started')
                            window.scrollTo({
                                top:window.innerHeight,
                                behavior:'smooth'
                            })
                        }
                    }         
                >
                    
                    <h2>NOUVELLE COLLECTION</h2>
                    <p>clic pour voir</p>
                    <h2>NOUVELLE COLLECTION</h2>
                    
                </div>
            </div>
            <div className='news'>
                <div className='concert'>
                    <div>
                        <div className='infos'>
                            <h2>
                                KEKRA
                            </h2>
                            <h3>PARIS, La défense</h3>
                            <p>22 janvier 2022</p>
                            <p>20h-01h</p>
                            <button>PRENDS TA PLACE</button>
                        </div>
                        <div className='title'>
                            <h4>CONCERT</h4>
                            <h4>CONCERT</h4>
                        </div>
                    </div>
                </div>
                <div className='CD'>
                    <div className='album'>
                        
                    </div>
                    <div className='album'>

                    </div>
                    <div className='album'>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Shop;