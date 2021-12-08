import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { uuid } from '../../core/utils';
import SizeComponent from './SizeComponent';

const ConcertForm = () => {
    const [id,setId]=useState(null)
    const [name,setName]=useState('')
    const [image,setImage]=useState('')
    const [price,setPrice]=useState('')
    const [description,setDescription]=useState('')
    const [quantite,setQuantite]=useState('')

    const confirm=(e)=>{
        e.preventDefault()
        setId(uuid())
        console.log(name,description,image,quantite,price);
    }


    useEffect(()=>{
        const putData=async()=>{
            await axios.post('http://localhost:3001/api/produits/create',{id,categorie:'concert'})
                const data={
                    ProduitId: id,
                    description,
                    prix:price,
                    quantite,
                    nom:name,
                    image,
                    note:0
                }
                const reponse=await axios.post('http://localhost:3001/api/concert/create',data)
                console.log(reponse.data);
                if(reponse.data=='OK'){
                    console.log('oui');
                }
        }
        if(id){
            setId(null)
            setName('')
            setImage('')
            setPrice('')
            setDescription('')
            setQuantite('')
            putData()
        }
    },[id])

    return (
        <form>
            <h2>Add value to Concert</h2>
            <input
                type='text'
                placeholder='Nom'
                onChange={(e)=>setName(e.target.value)}
                value={name}
            />
            <input
                type='text'
                placeholder='Image'
                onChange={(e)=>setImage(e.target.value)}
                value={image}
            />
            <input
                type='number'
                placeholder='Quantité'
                onChange={(e)=>setQuantite(parseFloat(e.target.value)||e.target.value)}
                value={quantite}
            />
            <input
                type='number'
                placeholder='Prix'
                onChange={(e)=>setPrice(parseFloat(e.target.value)||e.target.value)}
                value={price}
            />
            <textarea
                placeholder='Description'
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
            />
                
    
            <button onClick={confirm}>Valider</button>
        </form>
    );
};

export default ConcertForm;