import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Album = (props) => {
    return (
        <div>
            <Navbar/>
            <div className="wrapper">    
                <div className="leftSide">
                    <div className="albumImg">

                    </div>
                </div>

                <div className="rightSide">
                    <div className="albumContainer">
                        <h2>Album titile BDD</h2>
                        <p>Album desc BDD</p>
                        <div className="albumDesc">
                            <hr/>
                        </div>
                        <div className="containerButton">
                            <button>Ajouter au panier</button>
                            <p>19.99€ BDD</p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Album;