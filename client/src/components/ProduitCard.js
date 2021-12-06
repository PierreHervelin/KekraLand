import React, { useEffect, useState } from 'react';
import { User } from '../data/data';

const ProduitCard=(props)=>{
    const [quantity,setQuantity]=useState(props.produit.quantite?props.produit.quantite:null)

    useEffect(()=>{
        if(Number.isInteger(quantity)){
            User.panier.changeQuantite(
                props.produit.id,
                quantity
            )
            props.update()
        }
    },[quantity])

    if(props.produit==='Le panier est vide'){
        return (
            <div>Le panier est vide</div>
        )
    }

    return(
        <div className='ProduitCard'>
            <span className='image' style={{backgroundImage:`url(${props.produit.image})`}}/>
            <div>
                <span>{props.produit.nom}</span>
                <span>{`${props.produit.prix}€`}</span>
                <input
                    type='number'
                    onChange={(e)=>
                        setQuantity(
                            parseInt(e.target.value)?parseInt(e.target.value):''
                        )
                    }
                    value={quantity}
                />
                <span 
                    onClick={()=>{
                        User.panier.deleteProduit(props.produit.id)
                        props.update()
                    }}
                >+</span>
            </div>
        </div>
    )
}

export default ProduitCard;