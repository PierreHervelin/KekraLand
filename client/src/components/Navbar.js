import React from 'react';
import Logo from '../asset/img/kekratitle.png'

const Navbar = () => {
    const activeContentShop=(e)=>{
        const content=document.querySelector('.ContentShop')
        const navbar=document.querySelector('.Navbar')

        content.classList.add('active')
        navbar.classList.add('active')
    }

    const activeSearch=()=>{
        const input=document.querySelector('.Navbar .container input')

        input.classList.add('active')
    }
    return (
        <div className='Navbar' onMouseEnter={activeContentShop}>
            <img src={Logo} alt='KEKRA'/>
            <div className='container'>
                <input
                    type='text'
                />
                <div className='icon-search' onClick={activeSearch}></div>
                <div className='icon-user'></div>
                <div className='icon-shopping-cart'></div>
            </div>
        </div>
    );
};

export default Navbar;