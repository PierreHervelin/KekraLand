import React from 'react';

const Footer = () => {
    return (
        <div className='footer-container'>
            <footer>
                <div className='main'>
                    <ul>
                        <li>mention légales</li>
                        <li>conditions de ventes</li>
                        <li>politique et confidentialité</li>
                    </ul>
                    <ul>
                        <li>nous contacter</li>
                        <li>informations de livraison</li>
                        <li>retours et échanges</li>
                    </ul>
                </div>
                <hr/>
                <div className='reseaux'>
                    <div>youtube</div>
                    <div>instagram</div>
                    <div>twitter</div>
                </div>
                <div className='credits'>
                    © Projet 0
                    <div>Julien</div>
                    <div>Alexandra</div>
                    <div>Emeric</div>
                    <div>Pierre</div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;