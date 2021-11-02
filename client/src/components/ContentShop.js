import React, { useState } from 'react';
import { CategorieShop } from '../data/data';

const ContentShop = () => {
    const [content,setContent]=useState([])

    const titles=[]

    const getContent=(e)=>{
        const list=[]
        let indice

        for(let element of e.target.parentNode.children){
            if(element.classList.contains('active')){
                element.classList.remove('active')
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

        for(let result of CategorieShop[indice].content){
            list.push(
                <div key={result}>{result}</div>
            )
        }
        setContent(list)
    }

    const contentLeave=()=>{
        const content=document.querySelector('.ContentShop')
        content.classList.remove('active')
    }

    for(let categorie of CategorieShop){
        titles.push(
            <h2 
                key={categorie.id}
                onMouseEnter={getContent}
            >{categorie.title}</h2>
        )
    }

    return (
        <div className='ContentShop' onMouseLeave={contentLeave}>
            <div className='title'>
                {titles}
            </div>
            <div className='content'>
                {content}
            </div>
        </div>
    );
};

export default ContentShop;