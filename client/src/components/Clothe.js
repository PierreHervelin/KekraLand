import React, { useEffect, useRef, useState} from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { User } from '../data/data';
import axios from 'axios';

const Clothe = (props) => {
    const [isFixed, setIsFixed] = useState(false)
    const [size,setSize] = useState(null)
    const [note,setNote] = useState(props.vetement[0].note)
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

    const rate=(e)=>{
        const target=e.target
        const index=Number(target.id)

        setNote(index+1)
    }

    const rateOut=()=>{
        setNote(props.vetement[0].note)
    }

    const rateClick=async()=>{
        const tempNote=note
        await axios.get(
            `http://localhost:3001/api/vetement/addNote/${props.vetement[0].ProduitId}`,
            {
                params:{
                    note
                }
            }
        )
        setNote(tempNote)
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
            <Navbar/>
            <div className="wrapper">
                <div className='sideContainer'>
                    <div className="leftSide">
                        <div className="clothes">
                            <img src={props.vetement[0]?.image} alt=''/>
                        </div>
                    </div>
                    <div className={`rightSide ${isFixed?'fixed':''}`}>
                        <div className="colthesContainer">
                            <div className='title-stars'>
                                <h2>{props.vetement[0]?.nom}</h2>
                                <div 
                                    className='stars'
                                    onMouseMove={rate}
                                    onMouseOut={rateOut}
                                    onClick={rateClick}
                                    ref={el=>ref.current.stars=el}
                                >
                                    <span id='0' className='material-icons'>{1<=note?'star':'star_border'}</span>
                                    <span id='1' className='material-icons'>{2<=note?'star':'star_border'}</span>
                                    <span id='2' className='material-icons'>{3<=note?'star':'star_border'}</span>
                                    <span id='3' className='material-icons'>{4<=note?'star':'star_border'}</span>
                                    <span id='4' className='material-icons'>{5<=note?'star':'star_border'}</span>
                                </div>
                            </div>
                            <div ref={el=>ref.current.parentSizeButton=el} className='taille-content'>
                                {props.vetement.map ((item, i) =>
                                    <button onClick={clickOnSize} key={i}>{item.taille}</button>
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
                                                id:props.vetement[0].ProduitId+size,
                                                nom:props.vetement[0].nom,
                                                taille:size,
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