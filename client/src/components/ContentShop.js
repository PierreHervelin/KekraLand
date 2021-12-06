import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { CategorieShop } from '../data/data';

const ContentShop = (props) => {
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
                    className='link-container'
                    key={result}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{
                        duration:0.5,
                        delay:i/10
                    }}
                    onClick={contentOnClick}
                ><span>{result}</span></motion.div>
            )
            i++
        }
        setContent(list)
    }

    const contentOnClick=(e)=>{
        const el=e.target
        const text=e.target.innerHTML.toLowerCase().replace(/ |,|\.|-/gm,'').replace(/é/gm,'e')
        if(!el.classList.contains('link-container')&&!['hoodies','tshirts'].includes(text)){
            const link=document.createElement('a')
            link.href=`/product/${text.toLowerCase()}`
            link.click()
        }
    }

    for(let categorie of CategorieShop){
        titles.push(
            <div className='title' key={categorie.id}>
                <h2 onMouseEnter={getContent}>{categorie.title}</h2>
            </div>
        )
    }

    return (
        <div 
            className={`ContentShop ${props.active?'active':''}`} 
            onMouseLeave={()=>{props.outFunction()}}
        >
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