import React, { useState } from 'react';
import Logo from '../asset/img/kekratitle.png'


const Navbar = () => {

    const activeContentShop=(e)=>{
        const content=document.querySelector('.ContentShop')
        const navbar=document.querySelector('.Navbar')

        content.classList.add('active')
        navbar.classList.add('active')
    }
    const openPanier=()=>{
        const panier=document.querySelector('.Panier')
        panier.classList.add('active')
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
                    onClick={openPanier}
                ></div>
            </div>
        </div>
    );
};

export default Navbar;