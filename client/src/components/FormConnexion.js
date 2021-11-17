import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { User } from '../data/data';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const FormConnexion = (props) => {
    const [login,setLogin]=useState('')
    const [password,setPassword]=useState('')
    const [isLogin,setIsLogin]=useState(false)
    const [user,setUser]=useState(null)


    const onConfirm=async(e)=>{
        e.preventDefault()

        const userExist=async()=>{
            const response=await axios.post('http://localhost:3001/api/users/connexion',data)
            return response.data
        }

        const data={password}
        if((/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(login))){
            data.email=login
        }else{
            data.login=login
        }

        const reponse=await userExist()

        if(!reponse.exist){
            console.log('erreur')
        }else{
            sessionStorage.setItem('userLogin',login)
            sessionStorage.setItem('token',reponse.token)
            User.login=login
            User.token=reponse.token
            setUser(reponse.user)
            setIsLogin(true)
            console.log('oui');
        }
    }

    useEffect(()=>{
        setIsLogin(false)
    },[])

    useEffect(()=>{
        if(user){
            setIsLogin(true)
        }
    },[user])

    useEffect(()=>{
        const getUser=async(login)=>{
            const user=await axios.get(`http://localhost:3001/api/users/${login}`)
            setUser(user.data)
        }
        if(User.token&&User.login){
            console.log('oui');
            if(!user){
                getUser(User.login)
            }
        }
    },[isLogin])


    if(isLogin){
        return (
            <div className={`formConnexion ${props.active?'active':''}`}>
                <h3>Bonjour {user?.nom} {user?.prenom}</h3>
            </div>
        )
    }else{
        return (
            <div className={`formConnexion ${props.active?'active':''}`}> {/* Add Div !! */}
                <form>
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
                <p>Tu n'as pas de compte ? 
                    <Link className="simpleLink" to="/Inscription"> Inscription</Link>
                </p>
            </div>
        );
    }
};

export default FormConnexion;