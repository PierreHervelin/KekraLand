import React, { useEffect, useState } from 'react';
import Logo from '../asset/img/kekratitle.png'
import CompPanier, { UserPanier } from './CompPanier';
import FormConnexion from './FormConnexion';

export const unactiveNavBar=()=>{
    const content=document.querySelector('.ContentShop')
    const navbar=document.querySelector('.Navbar')

    navbar.dataset.visible=false

    content.classList.remove('active')
    navbar.classList.remove('active')
}

const Navbar = () => {
    const [panier,setPanier]=useState([])
    const [prevScrollPos,setPrevScrollPos]=useState(window.scrollY)
    const [visible,setVisible]=useState(true)

    const activeContentShop=(e)=>{
        const content=document.querySelector('.ContentShop')
        const navbar=document.querySelector('.Navbar')

        content.classList.add('active')
        navbar.classList.add('active')
    }

    const handleScroll=()=>{
        const currentScrollPos=window.scrollY
        
        setPrevScrollPos(currentScrollPos)
        setVisible(prevScrollPos>currentScrollPos)
        if(!prevScrollPos>currentScrollPos){
            unactiveNavBar()
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        } 
    })

    return (
        <div 
            className='Navbar'
            data-active={visible}
            onMouseEnter={activeContentShop}
        >
            <img src={Logo} alt='KEKRA'/>
            <div className='container'>
                <div className='search-container'>
                    <input
                        type='text'
                    />
                    <div className='icon icon-search'></div>
                </div>
                <div>
                    <div className='icon icon-user'></div>
                    <FormConnexion/>
                </div>
                <div 
                    className='icon icon-shopping-cart'
                    onClick={()=>{
                        setPanier(UserPanier.produits.slice())
                        document.querySelector('.Panier').classList.add('active')
                        document.querySelector('.black-bottom').classList.add('active')
                        document.body.style.overflow='hidden'
                    }}
                ></div>
            </div>
            <div className='black-bottom'/>
            <CompPanier panier={panier}/>
        </div>
    );
};

export default Navbar;