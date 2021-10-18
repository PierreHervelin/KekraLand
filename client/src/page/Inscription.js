
import React from 'react';

const Inscription = () => {
    return (
        <div>
            <h1>Inscription</h1>
            <form type="post">
                <input type="text" name="nom" placeholder="Nom"/>
                <input type="text" name="prenom" placeholder="Prénom"/>
                <input type="text" name="mail" placeholder="Mail"/>
                <input type="text" name="login" placeholder="Login"/>
                <input type="text" name="password" placeholder="Mot de passe"/>
                <input type="text" name="passwordc" placeholder="Cofirmer votre mot de passe"/>
                <input type="submit" name="envoyer"/>
            </form>
        </div>
    );
};

export default Inscription;