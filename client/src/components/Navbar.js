import React from 'react';

const Navbar = () => {
    const activeContentShop=(e)=>{
        const content=document.querySelector('.ContentShop')
        content.classList.add('active')
    }
    return (
        <div className='Navbar' onMouseEnter={activeContentShop}>
            <h1>KEKRA SHOP</h1>
        </div>
    );
};

export default Navbar;