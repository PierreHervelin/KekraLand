import React, { useState, useRef, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormCompte from '../components/FormCompte';


const Compte = () => {

    const [isFixed, setIsFixed] = useState(false)
    const ref=useRef({})

    let scrollPos=0

    const scrollEvent=(e)=>{
        e.preventDefault()
        console.log(e);
        if(e.deltaY<0){
            console.log('haut');
            scrollPos=scrollPos<=0?scrollPos:scrollPos-1
        }else{
            console.log('bas');
            scrollPos=scrollPos>=2?scrollPos:scrollPos+1
        }
        window.scrollTo({
            top:scrollPos*window.innerHeight,
            behavior:'smooth'
        })
    }

    const printMess=()=>{
        ref.current.pvalid.classList.add('active')
        setTimeout(() => {
            ref.current.pvalid.classList.remove('active')
        }, 3000);
    }

    useEffect(()=>{
        window.addEventListener('wheel',scrollEvent,{passive:false})
        return ()=>{
            window.removeEventListener('wheel',scrollEvent,{passive:false})
        }
    },[])

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
        <div className="compte"> 
            <Navbar/>
                <p className='pvalid' ref={el=>ref.current.pvalid=el}>Les modifications ont bien été pris en compte</p>
                <div className='formContainer'>
                    <FormCompte activeMess={printMess}/>
                </div>
            <Footer/>
        </div>
    );
};

export default Compte;