import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const FormInscription = (props) => {
    const [nom,setNom]=useState('')
    const [prenom,setPrenom]=useState('')
    const [login,setLogin]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confPassword,setConfPassword]=useState('')

    const ref=useRef({})

    const onConfirm=async(e)=>{
        e.preventDefault()
        const loginIsFree=async()=>{
            const response=await axios.post('http://localhost:3001/api/users/checkLogin',{login})
            return response.data.exist
        }

        const emailIsFree=async()=>{
            const response=await axios.post('http://localhost:3001/api/users/checkEmail',{email})
            return response.data.exist
        }

        const emailValid=await emailIsFree()
        const loginValid=await loginIsFree()

        if(!emailValid&&!loginValid){
            if(
                !(ref.current['password'].classList.contains('error'))&&
                !(ref.current['confPassword'].classList.contains('error'))
            ){
                const data={
                    nom,
                    prenom,
                    login,
                    email,
                    password,
                    grade:1
                }
                axios.post('http://localhost:3001/api/users/create',data)
                props.data.history.push('/')

            }
        }
        
    }

    useEffect(()=>{
        if(password){
            if((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/.test(password))){
                ref.current['password'].classList.remove('error')
            }else{
                ref.current['password'].classList.add('error')
            }
    
            if(password!==confPassword){
                ref.current['confPassword'].classList.add('error')
            }else{
                ref.current['confPassword'].classList.remove('error')
            }
        }
    },[password,confPassword,login])
    
    return (
        <form className="formInscription">
            <h1>Inscription</h1>
            <input 
                type="text" 
                id="text" 
                placeholder="Nom" 
                required
                onChange={(e)=>setNom(e.target.value)}
                value={nom}
            />
            <input 
                type="text" 
                id="text" 
                placeholder="Prenom" 
                required
                onChange={(e)=>setPrenom(e.target.value)}
                value={prenom}
            />
            <input 
                type="text" 
                id="text" 
                placeholder="Login" 
                required
                onChange={(e)=>setLogin(e.target.value)}
                ref={el=>ref.current['login']=el}
                value={login}
            />
            <input 
                type="email" 
                id="text" 
                placeholder="Email" 
                required
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
            />
            <input 
                type="password" 
                id="text" 
                placeholder="Mot de passe"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                ref={el=>ref.current['password']=el}
                required
            />
            <input 
                type="password" 
                id="text" 
                placeholder="Confirmer votre mot de passe"
                onChange={(e)=>setConfPassword(e.target.value)}
                value={confPassword}
                ref={el=>ref.current['confPassword']=el}
                required
            />
            <button onClick={onConfirm}>Valider</button>
        </form>
    );
};

export default FormInscription;