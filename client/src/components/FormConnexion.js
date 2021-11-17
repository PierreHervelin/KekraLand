import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const FormConnexion = (props) => {

    const [login,setLogin]=useState('')
    const [password,setPassword]=useState('')

    const onConfirm=async(e)=>{
        e.preventDefault()

        const userExist=async()=>{
            const response=await axios.post('http://localhost:3001/api/users/connexion',data)
            return response.data.exist
        }

        const data={password}
        if((/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(login))){
            data.email=login
        }else{
            data.login=login
        }

        const isValide=await userExist()

        if(!isValide){
            console.log('erreur')
        }else{
            sessionStorage.setItem('user',login)
        }
    }


    return (
        <form className={`formConnexion ${props.active?'active':''}`}>
            <h3>Connexion</h3>
            <input 
                type="text" 
                placeholder="Login" 
                required
                onChange={(e)=>setLogin(e.target.value)}
                value={login}
            />
            <input 
                type="password" 
                placeholder="Mot de passe"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                required
            />
            <button onClick={onConfirm}>Valider</button>
        </form>
    );
};

export default FormConnexion;