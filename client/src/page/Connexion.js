import React, { useState } from 'react';
import axios from "axios";

const Connexion = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const Login =() => {
        const data = {login,password};
        axios.post("http://localhost:3001/api/users/login", data).then((response) => {
            console.log(response.data);
        });
    };

    return (
        <div className= "container">
            <div className = "form">
                <h1>Se connecter</h1>
                <input type = "text" onChange={(event) => {
                    setLogin(event.target.value);
                }}  placeholder = "Login" required/>
                <br/>
                <input type = "password" onChange={(event) => {
                    setPassword(event.target.value);
                }} placeholder = "Password" required/>
                <button onClick={Login}>Se connecter</button>
            </div>
        </div>
    );
};

export default Connexion;