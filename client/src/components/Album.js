import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

const Album = (props) => {
    const [album, setAlbum] = useState(null)
    const [isFixed, setIsFixed] = useState(false)
    useEffect(() => {
        const getAlbum = async () => {
            const album = await axios.get(`http://localhost:3001/api/album/byname/${props.album}`)
            setAlbum(album.data)
        }
        if (props.album != null) {
            getAlbum()
        }
    }, [])

    // observer :
    useEffect(()=>{
        const inViewport=(entries,observer)=>{
            entries.forEach(item=>{
                if(item.isIntersecting){
                    setIsFixed(false)
                }else{
                    setIsFixed(true)
                }
            })
        };

        const Obs=new IntersectionObserver(inViewport);

        const els=document.querySelectorAll('.observe')
        els.forEach(item=>{
            Obs.observe(item)
        })
    })

    console.log(album);
    return (
        <div>
            <Navbar />
            <div className="wrapper">
                <div className='sideContainer'>
                    <div className="leftSide">
                        <div className="albumImg">
                            <div>
                                <img src={album?.album.image} alt='' />
                            </div>
                        </div>
                        <div className="albumTracklist">
                            {album?.tracklist.map((item, i)=>
                                <div key={i}>
                                    <span>{item.numero}</span>
                                    <span>{item.titre}</span>
                                    <span>{item.temps}</span>
                                </div>
                            )}
                        </div>
                        
                    </div>

                    <div className={`rightSide ${isFixed?'fixed':''}`}>
                        <div className="albumContainer">
                            <h2>{album?.album.nom}</h2>
                            <div className="albumDesc">
                                <hr />
                            </div>
                            <div className="containerButton">
                                <button>Ajouter au panier</button>
                                <p>{album?.album.prix} €</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Album;