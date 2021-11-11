import React, { useEffect, useState } from 'react';
import { uuid } from '../../core/utils';
import SizeComponent from './SizeComponent';

const ClothForm = () => {
    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [image,setImage]=useState('')
    const [description,setDescription]=useState('')

    const [fields,setFields]=useState([])

    const confirm=(e)=>{
        e.preventDefault()
        if(name&&description&&image&&fields.length){
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