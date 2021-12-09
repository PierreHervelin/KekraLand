import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { User } from '../data/data';
import Loader from "./Loader";

const FormCompte = (props) => {
    const [user, setUser]=useState(null)
    const [nom,setNom]=useState('')
    const [prenom,setPrenom]=useState('')
    const [login,setLogin]=useState(User.login)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confPassword,setConfPassword]=useState('')


    const ref=useRef({})

    const onConfirm=async(e)=>{
        e.preventDefault()
  
        const data = {
            login:user.login,
            nom,
            prenom,
            email,
            grade: 1
        }
        const isGood = await axios.post('http://localhost:3001/api/users/update', data)
        console.log(isGood);
        if(isGood.data === "OK"){
            props.activeMess()
        }
    }

    const getUser=async()=>{
        const response=await axios.get('http://localhost:3001/api/users/'+User.login)
        setUser(response.data)
        console.log(user);
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

    useEffect(()=>{
        if (user) {
            setTimeout(() => {
                ref.current['title'].classList.remove('init')
            }, 500);
            setNom(user.nom)
            setPrenom(user.prenom)
            setLogin(user.login)
            setEmail(user.email)
        }
    },[user])

    useEffect(()=>{
        getUser()
    }, [])
    if(user){
        return (
            <form
                className="formCompte init"
                ref={el => { ref.current['title'] = el }}
            >
                
                <h2>MES INFORMATIONS PERSONNELLES</h2>
                <input
                    type="text"
                    id="text"
                    placeholder="Nom"
                    required
                    onChange={(e) => setNom(e.target.value)}
                    value={nom}
                />
                <input
                    type="text"
                    id="text"
                    placeholder="Prenom"
                    required
                    onChange={(e) => setPrenom(e.target.value)}
                    value={prenom}
                />
                <input
                    type="email"
                    id="text"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <button onClick={onConfirm}>Valider</button>
            </form>
        );
    }
    else if(!login){
        return ( 
            <div>
                <h2>Veuillez vous connecter et recharger la page</h2>
            </div>
        )
    }else{
        return(
            <Loader/>
        )
    }
        
};

export default FormCompte;