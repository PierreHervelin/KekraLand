import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { User } from '../data/data';
import { Link } from 'react-router-dom';
import { UserPanier } from '../class/UserPanier';

const FormConnexion = (props) => {
    const [login,setLogin]=useState('')
    const [password,setPassword]=useState()
    const [passwordShown, setPasswordShown] = useState(false);
    const [isLogin,setIsLogin]=useState(false)
    const [user,setUser]=useState(null)

    const ref=useRef({})

    const getUser=async()=>{
        const user=await axios.get(`http://localhost:3001/api/users/${login?login:User.login}`)
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
            let text = ref.current.errorMessage;
            text.textContent = "Mot de passe ou login incorrect"
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

    const togglePassword = () => {
        let eyeLogo = ref.current.span;
        if(passwordShown === false){
            eyeLogo.classList.remove("material-icons-outlined");
            eyeLogo.classList.add("material-icons");
            setPasswordShown(!passwordShown);
        }
        else{
            eyeLogo.classList.remove("material-icons");
            eyeLogo.classList.add("material-icons-outlined");
            setPasswordShown(!passwordShown);
        }
    }


    if(user){
        return (
            <div className={`formConnexion login ${props.active?'active':''}`}>
                <h3>Bonjour {user?.login}</h3>
                <div className='options'>
                    <a href='/compte'>Mon compte</a>
                    <a>Paramètres</a>
                </div>
                <button onClick={logoutFunction}>Déconnexion</button>
            </div>
        )
    }else{
        return (
            <form className={`formConnexion ${props.active?'active':''}`} onMouseEnter={props.closeNavBar}> 
                <h3>Connexion</h3>
                <p ref={el=>ref.current.errorMessage=el} className="errorMessage"></p>
                <input 
                    type="text"
                    placeholder="Login" 
                    required
                    onChange={(e)=>setLogin(e.target.value)}
                    value={login}
                />
                <input 
                    type={passwordShown? "text" : "password"}  
                    placeholder="Mot de passe"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    required
                />
                <span ref={el=>ref.current.span=el} onClick={togglePassword} className="material-icons-outlined eyeIcon">remove_red_eye</span> 

                <button onClick={loginFunction}>Valider</button>
                <p>Tu n'as pas de compte ? 
                    <Link to="/Inscription">inscris toi</Link>
                </p>
            </form>
        );
    }
};

export default FormConnexion;