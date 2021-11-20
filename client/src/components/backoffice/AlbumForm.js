import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { uuid } from '../../core/utils';
import TrackComponent from './TrackComponent';

const AlbumForm = () => {
    const [id,setId]=useState(null)
    const [name,setName]=useState('')
    const [image,setImage]=useState('')
    const [price,setPrice]=useState('')
    const [stock,setStock]=useState('')

    const [fields,setFields]=useState([])

    const confirm=(e)=>{
        e.preventDefault()
        console.log(name,image,fields,price);
        if(name&&price&&image&&fields.length){
            setId(uuid())
        }
    }

    const newTrack=(e)=>{
        e.preventDefault()
        
        setFields([...fields,{
            num:fields.length+1>=10?(fields.length+1).toString():'0'+(fields.length+1),
            title:'',
            time:''
        }])
    }

    const updateTitle=(title,i)=>{
        const temp=[...fields]
        temp[i].title=title
        setFields(temp)
    }
    const updateTime=(time,i)=>{
        const temp=[...fields]
        temp[i].time=time
        setFields(temp)
    }
    const delField=(i)=>{
        const temp=[...fields]
        temp.splice(i,1)
        for(let j=0;j<temp.length;j++){
            temp[j].num=j+1>=10?(j+1).toString():'0'+(j+1)
        }
        setFields(temp)
    }

    useEffect(()=>{
        const putData=async()=>{
            await axios.post('http://localhost:3001/api/produits/create',{id,categorie:'album'})
            await axios.post('http://localhost:3001/api/album/create',{
                ProduitId:id,
                prix:price,
                quantite:stock,
                nom:name,
                image
            })
            for(let field of fields){
                const data={
                    ProduitId:id,
                    numero:field.num,
                    titre:field.title,
                    temps:field.time
                }
                await axios.post('http://localhost:3001/api/tracklist/create',data)
            }
        }

        if(id){
            /*
            setId(null)
            setName('')
            setImage('')
            setPrice('')
            setFields([])
            */
            putData()
        }
    },[id])


    return (
        <form>
            <h2>Add value to Album</h2>
            <input
                type='text'
                placeholder='Titre'
                onChange={(e)=>setName(e.target.value)}
                value={name}
                required
            />
            <input
                type='text'
                placeholder='Image'
                onChange={(e)=>setImage(e.target.value)}
                value={image}
                required
            />
            <input
                type='number'
                placeholder='Prix'
                onChange={(e)=>setPrice(e.target.value)}
                value={price}
                required
            />
            <input
                type='number'
                placeholder='Quantite'
                onChange={(e)=>setStock(e.target.value)}
                value={stock}
                required
            />
            <div>
                <h3>Tracklist</h3>
                {fields.map((item,i)=>(
                    <TrackComponent 
                        update={{
                            updateTime,
                            updateTitle,
                            delField
                        }}
                        item={item}
                        i={i}
                        key={i}
                    />
                ))}
                <hr/>
                <button onClick={newTrack}>+</button>
            </div>
            <button onClick={confirm}>Valider</button>
        </form>
    );
};

export default AlbumForm;