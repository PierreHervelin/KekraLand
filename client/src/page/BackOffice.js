import React, { useEffect, useState } from 'react';
import AlbumForm from '../components/backoffice/AlbumForm';
import ClothForm from '../components/backoffice/ClothForm';
import ConcertForm from '../components/backoffice/ConcertForm';

const BackOffice = () => {
    const [option,setOption]=useState('')
    const [form,setForm]=useState('')

    useEffect(()=>{
        switch (option) {
            case 'cloth':
                setForm(
                    <ClothForm/>
                )
                break
            case 'album':
                setForm(
                    <AlbumForm/>
                )
                break
            case 'concert':
                setForm(
                    <ConcertForm/>
                )
                break
            default:
                setForm('')
                break
        }
    },[option])

    return (
        <div className='form'>
            <select onChange={(e)=>setOption(e.target.value)} value={option}>
                <option value=''>---Choisir une option---</option>
                <option value='cloth'>Vêtements</option>
                <option value='album'>Albums</option>
                <option value='concert'>Concerts</option>
            </select>
            {form}
        </div>
    );
};

export default BackOffice;