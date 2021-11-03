import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { UserPanier } from './CompPanier';

const ProduitCard = (props) => {
    const [quantite,setQuantite]=useState(props.produit.quantite)

    useEffect(()=>{
        if(Number.isInteger(quantite)&&quantite!=props.produit.quantite){
            UserPanier.changeQuantite(props.produit.id,quantite)
        }
    })

    return (
        <motion.div
            className='ProduitCard'
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
                duration:0.5,
                delay:props.pos/10
            }}
        >
            <span className='image'/>
            <div>
                <span>{props.produit.nom}</span>
                <span>{`${props.produit.prix}€`}</span>
                <input
                    type='number'
                    onChange={(e)=>{
                        if(Number.isInteger(e.target.value)){
                            e.target.classList.add('error')
                        }
                        setQuantite(e.target.value)
                    }}
                    value={quantite}
                    style={{
                        width:`${quantite.toString().length+3}ch`
                    }}
                />
                <span 
                    className='icon-cross'
                    onClick={(e)=>{
                        UserPanier.deleteProduit(props.produit.id)
                        e.target.parentNode.parentNode.style.display='none'
                        console.log(UserPanier);
                    }}
                />
            </div>
        </motion.div>
    );
};

export default ProduitCard;