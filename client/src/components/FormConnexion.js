import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const FormConnexion = () => {

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
            data.login=login;
        }

        const isValide=await userExist();

        if(!isValide){
            console.log('erreur');
        }else{
            console.log('valide');
        }
    }


    return (
        <form className="formConnexion">
            <h1>Connexion</h1>
            <input 
                type="text" 
                id="text" 
                placeholder="Login" 
                required
                onChange={(e)=>setLogin(e.target.value)}
                value={login}
            />
            <input 
                type="password" 
                id="text" 
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