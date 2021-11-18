import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { User } from '../data/data';
import { Link } from 'react-router-dom';
import { UserPanier } from '../class/UserPanier';

const FormConnexion = (props) => {
    const [login,setLogin]=useState('')
    const [password,setPassword]=useState('')
    const [isLogin,setIsLogin]=useState(false)
    const [user,setUser]=useState(null)

    const getUser=async()=>{
        const user=await axios.get(`http://localhost:3001/api/users/${login}`)
        setUser(user.data)
    }

    const loginFunction=async(e)=>{
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
            console.log(reponse);
            setUser(reponse.user)
        }
    }
    const logoutFunction=()=>{
        User.token=null
        User.login=null
        User.panier=new UserPanier()
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userLogin')
        setUser(null)
    }

    useEffect(()=>{
        if(User.token&&User.login){
            if(!user){
                getUser(User.login)
            }
        }else{
            if(user){
                sessionStorage.setItem('userLogin',user.login)
                sessionStorage.setItem('token',user.token)
                User.login=user.login
                User.token=user.token
            }
        }
    },[user])


    if(user){
        return (
            <div className={`formConnexion login ${props.active?'active':''}`}>
                <h3>Bonjour {user?.login}</h3>
                <div className='options'>
                    <a>Mon compte</a>
                    <a>Paramètres</a>
                </div>
                <button onClick={logoutFunction}>Déconnexion</button>
            </div>
        )
    }else{
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
                <p>Tu n'as pas de compte ? 
                    <Link to="/Inscription">inscris toi</Link>
                </p>
                <button onClick={loginFunction}>Valider</button>
            </form>
        );
    }
};

export default FormConnexion;