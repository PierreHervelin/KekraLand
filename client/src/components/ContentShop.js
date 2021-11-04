import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { CategorieShop } from '../data/data';

const ContentShop = () => {
    const [content,setContent]=useState([])

    const titles=[]

    const getContent=(e)=>{
        const list=[]
        let indice

        for(let element of e.target.parentNode.parentNode.children){
            if(element.firstElementChild.classList.contains('active')){
                element.firstElementChild.classList.remove('active')
            }
        }

        e.target.classList.add('active')

        switch (e.target.innerHTML) {
            case 'Albums CD':
                indice=0
                break
            case 'Vêtements':
                indice=1
                break
            case 'Concerts':
                indice=2
                break
            default:
                break
        }
        let i=0
        for(let result of CategorieShop[indice].content){
            list.push(
                <motion.div 
                    key={result}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{
                        duration:0.5,
                        delay:i/10
                    }}
                ><span>{result}</span></motion.div>
            )
            i++
        }
        setContent(list)
    }

    const contentLeave=()=>{
        const content=document.querySelector('.ContentShop')
        const navbar=document.querySelector('.Navbar')

        content.classList.remove('active')
        navbar.classList.remove('active')
    }

    for(let categorie of CategorieShop){
        titles.push(
            <div className='title' key={categorie.id}>
                <h2 onMouseEnter={getContent}>{categorie.title}</h2>
            </div>
        )
    }

    return (
        <div className='ContentShop' onMouseLeave={contentLeave}>
            <div className='title-container'>
                {titles}
            </div>
            <div className='content'>
                {content}
            </div>
        </div>
    );
};

export default ContentShop;