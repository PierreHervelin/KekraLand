import React, { useEffect, useState } from 'react';
import { User } from '../data/data';
import ProduitCard from './ProduitCard';

const Panier=(props)=>{
    const [produits,setProduits]=useState(User.panier.produits.slice())

    const update=()=>{
        setProduits(User.panier.produits.slice())
    }

    useEffect(()=>{
        if(!produits.length){
            setProduits(['Le panier est vide'])
        }
    },[produits])

    return(
        <div className={`Panier ${props.active?'active':''}`}>
            <h3>Panier</h3>
            <div className='content'>
                {User.panier.produits.map((produit,i)=>
                    <ProduitCard 
                        key={produit.id?produit.id:i} 
                        produit={produit} 
                        update={update}
                    />
                )}
            </div>
            <div className='total'>
                {`Total : ${User.panier.getTotalPrice()}€`}
            </div>
            <div 
                className='cross'
                fill='white'
                stroke='white'
                onClick={()=>{
                    props.close()
                    setTimeout(() => {
                        document.body.style.overflow='initial'
                    }, 500);
                }}
            >+</div>
        </div>
    )
}


export default Panier;