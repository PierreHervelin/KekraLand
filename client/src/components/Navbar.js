import React, { useEffect, useState } from 'react';
import Logo from '../asset/img/kekratitle.png'
import { Panier } from '../class/Panier';
import CompPanier, { UserPanier } from './CompPanier';

const Navbar = () => {
    const [panier,setPanier]=useState([])
    const activeContentShop=(e)=>{
        const content=document.querySelector('.ContentShop')
        const navbar=document.querySelector('.Navbar')

        content.classList.add('active')
        navbar.classList.add('active')
    }

    return (
        <div className='Navbar' onMouseEnter={activeContentShop}>
            <img src={Logo} alt='KEKRA'/>
            <div className='container'>
                <div className='search-container'>
                    <input
                        type='text'
                    />
                    <div className='icon icon-search'></div>
                </div>
                <div className='icon icon-user'></div>
                <div 
                    className='icon icon-shopping-cart'
                    onClick={()=>{
                        setPanier(UserPanier.produits.slice())
                        document.querySelector('.Panier').classList.add('active')
                        document.querySelector('.black-bottom').classList.add('active')
                    }}
                ></div>
            </div>
            <div className='black-bottom'/>
            <CompPanier panier={panier}/>
        </div>
    );
};

export default Navbar;