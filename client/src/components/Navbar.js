import React from 'react';
import Logo from '../asset/svg/kekratitle.svg'

const Navbar = () => {
    const activeContentShop=(e)=>{
        const content=document.querySelector('.ContentShop')
        const navbar=document.querySelector('.Navbar')
        content.classList.add('active')
        navbar.classList.add('active')
    }
    return (
        <div className='Navbar' onMouseEnter={activeContentShop}>
            <img src={Logo} alt='KEKRA'/>
        </div>
    );
};

export default Navbar;