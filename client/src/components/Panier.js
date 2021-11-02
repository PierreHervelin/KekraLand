import React, { useState } from 'react';

const Panier = () => {
    const closePanier=()=>{
        const panier=document.querySelector('.Panier')
        panier.classList.remove('active')
    }

    return (
        <div className='Panier'>
            <h3>Panier</h3>
            <div className='content-container'>
                <div className='content'>
                    Le Panier est vide.
                </div>
            </div>
            <div 
                className='cross icon-cross'
                onClick={closePanier}
            ></div>
        </div>
    );
};

export default Panier;