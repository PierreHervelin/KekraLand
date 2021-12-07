import React, { useEffect, useRef, useState} from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { User } from '../data/data';

const Clothe = (props) => {
    const [isFixed, setIsFixed] = useState(false)
    const [size,setSize] = useState(null)
    const ref=useRef({})


    useEffect(() =>{
        if (size) {
            ref.current.buyButton.classList.add('active')
        }
    },[size])

    const clickOnSize = (e) =>{
        const button = e.target
        const children = ref.current.parentSizeButton.children;
        for(var child of children){
            child.classList.remove('active')
        }
        button.classList.add('active')
        setSize(button.innerHTML)
    }

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
    
    return (
        <div className='product-clothe'>
            <Navbar />
            <div className="wrapper">
                <div className='sideContainer'>
                    <div className="leftSide">
                        <div className="clothes">
                            <div>
                                <img src={props.vetement[0]?.image} alt='' />
                            </div>
                        </div>  
                    </div>
                    <div className={`rightSide ${isFixed?'fixed':''}`}>
                        <div className="colthesContainer">
                            <h2>{props.vetement[0]?.nom}</h2>
                            <div ref={el=>ref.current.parentSizeButton=el} className='taille-content'>
                                {props.vetement.map ((item, i) =>
                                    <button onClick={clickOnSize} key={i}  > {item.taille} </button>
                                )}
                            </div>
                            <div className="clothesDesc">
                                <hr />
                            </div>
                            <div className="containerButton">
                                <div>
                                    <p 
                                        ref={el=>ref.current.p=el}
                                    >Ajouté au panier</p>
                                    <button 
                                        ref = {el=>ref.current.buyButton=el}
                                        onClick={()=>{
                                            console.log(User.panier);
                                            User.panier.addProduit({
                                                id:props.vetement[0].ProduitId,
                                                nom:props.vetement[0].nom,
                                                taille:props.vetement[0].taille,
                                                prix:props.vetement[0].prix,
                                                image:props.vetement[0].image,
                                                quantite:1
                                            })
                                            ref.current.p.classList.add('active')
                                            setTimeout(() => {
                                                ref.current.p.classList.remove('active')
                                            }, 2000);
                                        }}
                                    >Ajouter au panier</button>
                                </div>
                                <p>{props.vetement[0]?.prix} €</p>
                            </div>
                            <div className="albumDesc">
                            <br/>
                            <br/>
                                <h2>Description</h2>
                                <br/>
                                <p>{props.vetement[0]?.description}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Clothe;