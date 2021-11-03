import React, { useEffect, useState } from 'react';
import { Panier } from '../class/Panier';
import ProduitCard from './ProduitCard';

export const UserPanier=new Panier()

const CompPanier = (props) => {
    const [produits,setProduits]=useState([])

    useEffect(()=>{
        let pos=0
        const html=[]
        if(!props.panier.length){
            html.push('Le panier est vide.')
            setProduits(html)
            return
        }
        for(let produit of props.panier){
            html.push(
                <ProduitCard produit={produit} pos={pos} key={pos}/>
            )
            pos++
        }
        setProduits(html)
    },[props.panier])

    return (
        <div className='Panier'>
            <h3>Panier</h3>
            <div className='content'>
                {produits}
            </div>
            <div 
                className='cross icon-cross'
                onClick={(e)=>{
                    e.target.parentNode.classList.remove('active')
                    document.querySelector('.black-bottom').classList.remove('active')
                }}
            ></div>
        </div>
    );
};

export default CompPanier;