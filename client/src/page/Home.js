import React from 'react';
import Logo from '../asset/img/kekratitle.png'

const Home = () => {
    
    let numSlide=0;
    let pos=0;
    let interval;

    const suivant=()=>{
        clearInterval(interval)
        numSlide++;
        
        if(numSlide>3){
            numSlide=0;
            pos=0;
        }else{
            pos-=100;
        }

        document.querySelector('.slide-container').style.transform=`translate(${pos}vw)`;
        interval = setInterval(() => {
            suivant();
        }, 8000);
    }
    const precedent=()=>{
        clearInterval(interval)
        numSlide--;

        if(numSlide<0){
            numSlide=3;
            pos=-300;
        }else{
            pos+=100;
        }

        document.querySelector('.slide-container').style.transform=`translate(${pos}vw)`;
        interval = setInterval(() => {
            suivant();
        }, 8000);
    }


    return (
        <div className = 'home'>
            <img src={Logo} alt=''/>
            <div className="slider" id="slider">
                <div className='row slide-container'>
                </div>
                <div className ="precedent icon-cheveron-left" id = "precedent" onClick={precedent}> 
                </div>
                <div className ="suivant icon-cheveron-right" id="suivant" onClick={suivant}> 
                </div>
                <div className='degrade'></div>
            </div>
        </div>
    );
};

export default Home;