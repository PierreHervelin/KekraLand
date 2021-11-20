import { useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import Video from '../asset/video/shophomevideo.mp4'
import Navbar from '../components/Navbar';
import NewCollection from '../components/NewCollection';

import IMGnewCollection from '../asset/img/nouvellecollection.jpg'
import News from '../components/News';

const Home = () => {
    const [newCollection,setNewCollection]=useState([])
    const controls=useAnimation()

    let prevScrollPos=window.scrollY

    const ref=useRef({})

    const handleScroll=()=>{
        if(window.scrollY&&window.scrollY<window.innerHeight){
            const currentScrollPos=window.scrollY

            let down=false
            if(currentScrollPos>prevScrollPos) down=true

            prevScrollPos=currentScrollPos
            setTimeout(() => {
                if(down && currentScrollPos===window.scrollY){
                    const config={
                        top:(down)?window.innerHeight:0,
                        behavior:'smooth'
                    }
                    window.scrollTo(config)
                }
            }, 300);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

    return (
        <main className='Shop'>
            <Navbar/>
            <div className='video'>
                <video muted autoPlay loop>
                    <source src={Video} type='video/mp4'/>
                </video>
                <div className='content'>
                    <h2>NOUVEL ALBUM DISPONIBLE</h2>
                    <button>ACHETER MAINTENANT</button>
                </div>
            </div>
            <div ref={el=>ref.current['container_newCollection']=el} className='new-cloth'>
                <div className='back'></div>
                <img src={IMGnewCollection} alt=''/>
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
                            ref.current['container_newCollection'].classList.add('started')
                            window.scrollTo({
                                top:window.innerHeight,
                                behavior:'smooth'
                            })
                            setNewCollection(
                                <NewCollection/>
                            )
                            setTimeout(() => {
                                document.querySelector('.Navbar').dataset.active=false
                            }, 200);
                        }
                    }         
                >
                    <h2>NOUVELLE COLLECTION</h2>
                    <p>clic pour voir</p>
                    <h2>NOUVELLE COLLECTION</h2>
                    
                </div>
            </div>
            <News/>
        </main>
    );
};

export default Home;