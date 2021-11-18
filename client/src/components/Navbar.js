import React, { useEffect, useRef, useState } from 'react'
import Logo from '../asset/img/kekratitle.png'
import Panier from './Panier'
import FormConnexion from './FormConnexion'
import ContentShop from './ContentShop'

import { ReactComponent as LogoSearch } from '../asset/svg/search.svg'
import { ReactComponent as LogoShop } from '../asset/svg/shop.svg'
import { ReactComponent as LogoUser } from '../asset/svg/user.svg'

const Navbar = () => {
    const [userActive,setUserActive]=useState(false)
    const [visible,setVisible]=useState(true)
    const [navActive,setNavActive]=useState(false)
    const [panierActive,setPanierActive]=useState(false)

    const ref=useRef({})
    let scrollPos=window.scrollY

    const outContentShop=()=>{
        setNavActive(false)
    }
    const closePanier=()=>{
        setPanierActive(false)
        ref.current['blackbottom'].classList.remove('active')
    }

    const handleScroll=()=>{
        const currentScrollPos=window.scrollY
    
        setVisible(scrollPos>currentScrollPos)
        scrollPos=currentScrollPos
    }

    const handleClick=(e)=>{
        let parent=e.target
        let bool=true
        while(parent){
            if(parent.classList?.contains('shopNavbar')){
                bool=false
                break
            }
            parent=parent.parentNode
        }
        if(bool){
            setUserActive(false)
            setNavActive(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        window.addEventListener('click',handleClick)
    
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        } 
    },[])

    useEffect(()=>{
        if(!visible){
            setUserActive(false)
            setNavActive(false)
        }
    },[visible])

    return (
        <div className='shopNavbar'>
            <div 
                className='Navbar'
                data-active={visible}
                onMouseEnter={()=>setNavActive(true)}
            >
                <img src={Logo} alt='KEKRA'/>
                <div className='container'>
                    <div className='search-container'>
                        <input
                            type='text'
                        />
                        <LogoSearch className='icon' fill='white'/>
                    </div>
                    <div className='login-container'>
                        <LogoUser 
                            className='icon' 
                            id='LogoUser' 
                            fill='white'
                            onClick={(e)=>{
                                setNavActive(false)
                                setUserActive(!userActive)
                            }}
                        />
                        <FormConnexion active={userActive}/>
                    </div>
                    <LogoShop 
                        className='icon'
                        id='LogoShop'
                        fill='white'
                        onClick={()=>{
                            setUserActive(false)
                            setNavActive(false)
                            setPanierActive(true)
                            ref.current['blackbottom'].classList.add('active')
                            document.body.style.overflow='hidden'
                        }}
                    />
                </div>
                <div 
                    className='black-bottom' 
                    ref={el=>{ref.current['blackbottom']=el}}
                />
                <Panier active={panierActive} close={closePanier}/>
            </div>
            <ContentShop active={navActive} outFunction={outContentShop}/>
        </div>
    );
};

export default Navbar;