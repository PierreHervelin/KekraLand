import React, { useEffect, useRef } from 'react';
import Video from '../asset/video/shophomevideo.mp4'
import Navbar from '../components/Navbar';
import NewCollection from '../components/NewCollection';
import News from '../components/News';
import Footer from '../components/Footer';

const Home = () => {
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

    // observer :

    useEffect(()=>{
        const inViewport=(entries,observer)=>{
            entries.forEach(item=>{
                if(item.isIntersecting){
                    item.target.classList.add('visible')
                }
            })
        };

        const Obs=new IntersectionObserver(inViewport);

        const els=document.querySelectorAll('.observe')
        els.forEach(item=>{
            Obs.observe(item)
        })
    })

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
                <div className='img observe'></div>
                <div className='title'>
                    <h2>NOUVELLE COLLECTION</h2>
                </div>
            </div>
            <News/>
            <Footer/>
        </main>
    );
};

export default Home;