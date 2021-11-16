import axios from 'axios';
import React, { useEffect, useState } from 'react';

const NewCollection = () => {
    const [content,setContent]=useState([])

    const getImages=async()=>{
        const produit=await axios.get(
            'http://localhost:3001/api/produits/byCategorie',
            {
                params:{
                    categorie:'vetement'
                }
            }
        )
        const vetement=await axios.get(
            `http://localhost:3001/api/vetement/${produit.data[0].id}`
        )
        setContent([
            vetement.data,
            vetement.data,
            vetement.data,
            vetement.data
        ])
    }

    useEffect(()=>{
        console.log(content);
    },[content])

    useEffect(()=>{
        getImages()
    },[])

    return (
        <div className='NewCollection'>
            {content.map((item,i)=>
                <div className='image' key={i}>
                    <img src={item[0].image} alt=''/>
                </div>
            )}
        </div>
    );
};

export default NewCollection;