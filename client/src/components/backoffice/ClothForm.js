import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { uuid } from '../../core/utils';
import SizeComponent from './SizeComponent';

const ClothForm = () => {
    const [id,setId]=useState(null)
    const [name,setName]=useState('')
    const [image,setImage]=useState('')
    const [price,setPrice]=useState('')
    const [type,setType]=useState('tshirt')
    const [description,setDescription]=useState('')

    const [fields,setFields]=useState([])

    const confirm=(e)=>{
        e.preventDefault()
        console.log(name,description,image,fields,price);
        if(name&&description&&price&&image&&fields.length){
            for(let field of fields){
                if(!field.valid){
                    return
                }
            }
            setId(uuid())
        }
    }

    const newSize=(e)=>{
        e.preventDefault()
        
        setFields([...fields,{
            size:'',
            stock:'',
            valid:false
        }])
    }

    const updateSize=(size,i,valid)=>{
        const temp=[...fields]
        temp[i].size=size
        temp[i].valid=valid
        setFields(temp)
    }
    const updateStock=(stock,i,valid)=>{
        const temp=[...fields]
        temp[i].stock=stock
        temp[i].valid=valid
        setFields(temp)
    }
    const delField=(i)=>{
        const temp=[...fields]
        temp.splice(i,1)
        setFields(temp)
    }

    useEffect(()=>{
        console.log(type);
    },[type])

    useEffect(()=>{
        const putData=async()=>{
            await axios.post('http://localhost:3001/api/produits/create',{id,categorie:'vetement'})
            for(let field of fields){
                const data={
                    ProduitId: id,
                    description,
                    prix:price,
                    type,
                    stock:field.stock,
                    taille:field.size,
                    nom:name,
                    image,
                    note:0
                }
                const reponse=await axios.post('http://localhost:3001/api/vetement/create',data)
                console.log(reponse.data);
                if(reponse.data=='OK'){
                    console.log('oui');

                }
            }
        }

        if(id){
            setId(null)
            setName('')
            setImage('')
            setPrice('')
            setDescription('')
            setFields([])
            putData()
        }
    },[id])

    return (
        <form>
            <h2>Add value to Vêtement</h2>
            <input
                type='text'
                placeholder='Titre'
                onChange={(e)=>setName(e.target.value)}
                value={name}
            />
            <input
                type='text'
                placeholder='Image'
                onChange={(e)=>setImage(e.target.value)}
                value={image}
            />
            <select name='type' onChange={(e)=>{setType(e.target.value.toLowerCase().replace(/ |,|\.|-/gm,''))}}>
                <option id='tshirt'>T-shirt</option>
                <option id='hoodie'>Hoodie</option>
            </select>
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
            <div>
                <h3>Taille(s)</h3>
                {fields.map((item,i)=>(
                    <SizeComponent 
                        updateSize={updateSize} 
                        updateStock={updateStock}
                        delField={delField}
                        item={item}
                        i={i} 
                        key={i}
                    />
                ))}
                <hr/>
                <button onClick={newSize}>+</button>
            </div>
            <button onClick={confirm}>Valider</button>
        </form>
    );
};

export default ClothForm;