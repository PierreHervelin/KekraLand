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
    const clickShopHoodies = () => {
        const link = document.createElement('a')
        link.href = `/shop/hoodie`
        link.click()
    }
    const clickAlbum = () => {
        const link = document.createElement('a')
        link.href = `/product/vrealite`
        link.click()
    }

    return (
        <main className='Shop'>
            <Navbar/>
            <div className='video'>
                <video muted autoPlay loop>
                    <source src={Video} type='video/mp4'/>
                </video>
                <div className='content'>
                    <h2>NOUVEL ALBUM DISPONIBLE</h2>
                    <button onClick={clickAlbum}>ACHETER MAINTENANT</button>
                </div>
            </div>
            <div ref={el=>ref.current['container_newCollection']=el} className='new-cloth'>
                <div className='img observe'></div>
                <div className='title'>
                    <h2 onClick={clickShopHoodies}>NOUVELLE COLLECTION</h2>
                </div>
            </div>
            <News/>
            <Footer/>
        </main>
    );
};

export default Home;