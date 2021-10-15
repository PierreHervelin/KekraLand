import React from 'react';
import '../styles/index.css';

const Connexion = () => {
    return (
        <div class = "container">
            <div class = "form">
                <h1>Se connecter</h1>
                <input type = "text" id="name" name="name" placeholder = "Login" required/>
                <br/>
                <input type = "text" id="name" name="name" placeholder = "Password" required/>
                <input type = "submit" id="name" name="name"/>
            </div>
        </div>
    );
};

export default Connexion;