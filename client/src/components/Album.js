import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

const Album = (props) => {
    const [album,setAlbum]=useState(null)
    if (props.album != null) {
        const getAlbum=async()=>{
            const album=await axios.get(`http://localhost:3001/api/album/byname/${props.album}`)
            setAlbum(album.data)
        }
    }
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
                        <h2>{props.album}</h2>
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