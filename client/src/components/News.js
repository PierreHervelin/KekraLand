import React, { useEffect, useRef, useState } from 'react';
import clip from '../asset/video/kekra_video2.mp4'
import clipSalaire from '../asset/video/kekra_salaire.mp4'
import concert from '../asset/video/kekraconcert.mp4'

const News = () => {
    const ref=useRef({})

    useEffect(()=>{
        const interval=setInterval(() => {
            if(ref.current.box.classList.contains('move')){
                ref.current.box.classList.remove('move')
            }else{
                ref.current.box.classList.add('move')
            }
        }, 8000);
        const interval2=setInterval(() => {
            if(ref.current.concert.classList.contains('active')){
                ref.current.concert.classList.remove('active')
            }else{
                ref.current.concert.classList.add('active')
            }
        }, 10000);

        return ()=>{
            clearInterval(interval)
            clearInterval(interval2)
        }
    },[])
    const clickPlace = () => {
        const link = document.createElement('a')
        link.href = `/product/ladefense`
        link.click()
    }
    const clickShopTshirt = () => {
        const link = document.createElement('a')
        link.href = `/shop/tshirt`
        link.click()
    }
    const clickBox=()=>{
        const link=document.createElement('a')
        link.href='/product/box'
        link.click()
    }
    const clickInstagram = () => {
        const link = document.createElement('a')
        link.href = `https://www.instagram.com/kekraland/?hl=fr`
        link.target = '_blank'
        link.click()
    }
    
    return (
        <div className='news'>
            <div className='title'>
                <h2>À la une</h2>
            </div>
            <div className='content'>
                <div className='concert observe'>
                    <h2>KEKRA EN CONCERT</h2>
                    <div className='img'>
                        <video 
                            autoPlay
                            muted
                            loop
                            ref={el=>ref.current.concert=el}
                        >
                            <source src={concert}/>
                        </video>
                        <div className='back'></div>
                        <div className='infos'>
                            <h3>KEKRA</h3>
                            <h4>la défense, paris</h4>
                            <h4>22h</h4>
                            <h5>30 mars 2022</h5>
                            <button onClick={clickPlace}>prends ta place</button>
                        </div>
                    </div>
                </div>

                <div className='actu' ref={el=>ref.current['actu']=el}>
                    <div className='top observe'>
                        <div 
                            className='left'
                            ref={el=>ref.current.box=el}
                        >
                            <div className='box-container'>
                                <div className='box' id='box1'></div>
                                <div className='box' id='box2'></div>
                            </div>
                            <div className='infos'>
                                <h2>box kekra</h2>
                                <button onClick={clickBox}>voir plus</button>
                            </div>
                        </div>
                        <div className='right'>
                            <div>
                                <video autoPlay muted loop>
                                    <source src={clip}/>
                                </video>
                                <div 
                                    className='back'
                                    onClick={
                                        ()=>{
                                            ref.current.clip.click()
                                        }
                                    }
                                >
                                    <p>voir le clip</p>
                                </div>
                      
                            </div>
                            <div>
                                <video autoPlay muted loop>
                                    <source src={clipSalaire}/>
                                </video>
                                <div 
                                    className='back'
                                    onClick={
                                        ()=>{
                                            ref.current.clipSalaire.click()
                                        }
                                    }
                                >
                                    <p>voir le clip</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom observe'>
                        <div className='left'>
                            <div className='infos'>
                                <h3>derniers articles</h3>
                                <h4>jusqu'à -70%</h4>
                                <button  onClick={clickShopTshirt} >shopper</button>
                            </div>
                        </div>
                        <div className='right'>
                            <img src='https://cdn.discordapp.com/attachments/889877094711046216/918458679936835634/kekra-intermission.jpg'/>
                            <div 
                            className='back' onClick={clickInstagram}>
                                    <p>Instagram</p>
                            </div>       
                        </div>
        
                    </div>
                </div>
            </div>
            <a 
                href='https://www.youtube.com/watch?v=G9BwHA13jJc'
                target="_blank"
                ref={el=>ref.current.clip=el}
            />
             <a 
                href='https://www.youtube.com/watch?v=nqOTVuG1GPI'
                target="_blank"
                ref={el=>ref.current.clipSalaire=el}
            />
        </div>
    );
};

export default News;