import React from 'react';
import '../styles/index.css';
import Carousel from '../components/Carousel';




const Home = () => {
    
    let numSlide=0;
    let pos=0;

    const suivant=()=>{
        numSlide++;

        if(numSlide>3){
            numSlide=0;
            pos=0;
        }else{
            pos-=100;
        }

        document.querySelector('.slide-container').style.transform=`translate(${pos}vw)`;
    }
    const precedent=()=>{
        numSlide--;

        if(numSlide<0){
            numSlide=3;
            pos=-300;
        }else{
            pos+=100;
        }

        document.querySelector('.slide-container').style.transform=`translate(${pos}vw)`;
    }

    setInterval(() => {
        suivant();
    }, 8000);

    return (
        <div className = 'home'>
            <h1>KEKRA</h1>
            <div className="slider" id="slider">
                <div className='row slide-container'>
                    <Carousel/>
                </div>
                <div className ="precedent icon-arrow-left" id = "precedent" onClick={precedent}> 
                </div>
                <div className ="suivant icon-arrow-right" id="suivant" onClick={suivant}> 
                </div>
                <div className='degrade'></div>
            </div>
        </div>
    );
};

export default Home;